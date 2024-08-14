import React from 'react'
import "./portfolio.css"
import { data } from './data'
import Topic from './Topic'
import CV from './HUGO BRAJDIC CV.pdf'
const Portfolio = () => {

  return (
    <section className="container" id='portfolio'>
      <h1>Portfolio BUT Informatique - Parcours A: Réalisation d'applications</h1>
      <a href={CV} download="Hugo_BRAJDIC_CV" target='_blank'>
        <button className='btn'>Télécharger mon CV orienté compétences</button>
      </a>
      <div className="portfolio__topics">
        <ul >
          {data.map((topic) => {
            return <Topic topic={topic} ></Topic>
          })}

        </ul>
      </div>


    </section>

  )
}

export default Portfolio