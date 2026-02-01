import React from 'react'
import "./about.css"
import Hugo from '../../assets/Hugo.png'

const About = () => {
  const getAge = (birthDate) => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const birthDate = new Date(2003, 0, 5);
  const age = getAge(birthDate);

  return (<section className='container' id='about'>
    <h2>À propos</h2>
    <div className="about__main">
      <img src={Hugo} alt='Hugo Brajdic'></img>
      <div className="about__intro">
        Je m'appelle Hugo et j'ai {age} ans. Je suis passionné par la création informatique. <br></br>
        <div className="sub-text">
        La programmation, le graphisme ou encore la modélisation 3D sont mes terrains de jeu favoris. <br></br>
        Je suis étudiant en BUT Informatique et employé en alternance pour le groupe Covéa. <br></br>
        Ma double casquette me permet d’augmenter mes acquis théoriques et pratiques du développement informatique.<br></br>
        Mon rêve serait de devenir un développeur Full-stack accompli. <br></br>
        Découvrez-en davantage sur mes compétences et mes expériences dans la suite de cette page !
          </div>
      </div>
    </div>

  </section>
  )
}

export default About