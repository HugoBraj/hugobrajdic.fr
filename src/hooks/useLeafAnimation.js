import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const useLeafAnimation = (containerRef) => {
  const leavesRef = useRef([])
  const animationFrameRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.clientWidth || 800
    const height = container.clientHeight || 600

    if (width === 0 || height === 0) return

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, precision: 'mediump' })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Path curve
    const pathPoints = [
      new THREE.Vector3(-15, -2, 0),
      new THREE.Vector3(-12, -1.75, 0),
      new THREE.Vector3(-9, -2.25, 0),
      new THREE.Vector3(-6, -1.75, 0),
      new THREE.Vector3(-3, -2.25, 0),
      new THREE.Vector3(0, -1.75, 0),
      new THREE.Vector3(3, -2.25, 0),
      new THREE.Vector3(6, -1.75, 0),
      new THREE.Vector3(9, -2.375, 0),
      new THREE.Vector3(12, -1.75, 0),
      new THREE.Vector3(15, -2, 0)
    ]
    const curve = new THREE.CatmullRomCurve3(pathPoints, false)

    // Leaf factory
    const createLeaf = () => {
      const colors = [
        { color: 0xB0DEFF, emissive: 0x5f9dd9 }, // Blue
        { color: 0xe6a051, emissive: 0xb87f35 }  // Orange
      ]
      const c = colors[Math.random() > 0.5 ? 0 : 1]

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(
        new Float32Array([-0.3, 0, 0, 0.3, 0, 0, 0, 0.5, 0, 0, -0.5, 0, -0.2, 0.2, 0, 0.2, -0.2, 0]),
        3
      ))
      geometry.setIndex([0, 1, 2, 0, 1, 3, 4, 5, 2])

      const material = new THREE.MeshPhongMaterial({
        color: c.color,
        emissive: c.emissive,
        emissiveIntensity: 0.6,
        shininess: 10,
        side: THREE.DoubleSide
      })

      const leaf = new THREE.Mesh(geometry, material)
      leaf.scale.setScalar((Math.random() * 0.2 + 0.1))

      leaf.userData = {
        t: Math.random(),
        speed: Math.random() * 0.001 + 0.0008,
        orbitMode: Math.random() > 0.5,
        rotationVelocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        randomOffset: Math.random() * 0.3 - 0.15,
        baseEmissive: new THREE.Color(c.emissive)
      }

      scene.add(leaf)
      return leaf
    }

    // Create tightly-grouped leaf clusters
    const CLUSTER_COUNT = 15
    const LEAVES_PER_CLUSTER = 3

    for (let cluster = 0; cluster < CLUSTER_COUNT; cluster++) {
      const clusterT = cluster / CLUSTER_COUNT
      const clusterSpeed = Math.random() * 0.0008 + 0.001

      for (let i = 0; i < LEAVES_PER_CLUSTER; i++) {
        const leaf = createLeaf()
        leaf.userData.t = clusterT + (Math.random() - 0.5) * 0.08
        leaf.userData.speed = clusterSpeed + (Math.random() - 0.5) * 0.00015
        leavesRef.current.push(leaf)
      }
    }

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const directLight = new THREE.DirectionalLight(0xffffff, 1.2)
    directLight.position.set(5, 10, 7)
    scene.add(directLight)
    const specLight = new THREE.DirectionalLight(0xffffff, 0.6)
    specLight.position.set(-5, 8, 10)
    scene.add(specLight)

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      leavesRef.current.forEach((leaf, index) => {
        leaf.userData.t += leaf.userData.speed

        const variation = Math.sin(leaf.userData.t * Math.PI * 2 + leaf.userData.randomOffset) * 0.05
        const t = Math.max(0, Math.min(1, (leaf.userData.t % 1.0) + variation * 0.1))

        const point = curve.getPoint(t)
        const tangent = curve.getTangent(t).normalize()
        const glowIntensity = (Math.sin(leaf.userData.t * Math.PI * 4) + 1) * 0.15

        if (leaf.userData.orbitMode) {
          const worldUp = new THREE.Vector3(0, 1, 0)
          let perp = new THREE.Vector3().crossVectors(tangent, worldUp).normalize()
          
          if (perp.length() < 0.1) perp.set(1, 0, 0).normalize()
          
          const perp2 = new THREE.Vector3().crossVectors(tangent, perp).normalize()
          const angle = leaf.userData.t * Math.PI * 2 + index
          const offset = perp.clone().multiplyScalar(Math.cos(angle) * 0.3)
                             .add(perp2.clone().multiplyScalar(Math.sin(angle) * 0.3))

          leaf.position.copy(point).add(offset)
          leaf.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent)
          leaf.rotation.x += leaf.userData.rotationVelocity.x * 0.5
          leaf.rotation.y += leaf.userData.rotationVelocity.y * 0.5
          leaf.rotation.z += leaf.userData.rotationVelocity.z * 0.5
        } else {
          leaf.position.copy(point)
          leaf.rotation.x += leaf.userData.rotationVelocity.x
          leaf.rotation.y += leaf.userData.rotationVelocity.y
          leaf.rotation.z += leaf.userData.rotationVelocity.z
        }

        leaf.material.emissive.copy(leaf.userData.baseEmissive).multiplyScalar(0.6 + glowIntensity)
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      const w = container.clientWidth || 800
      const h = container.clientHeight || 600
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameRef.current)
      container.removeChild(renderer.domElement)
      leavesRef.current.forEach(leaf => {
        leaf.geometry.dispose()
        leaf.material.dispose()
      })
      renderer.dispose()
    }
  }, [containerRef])
}
