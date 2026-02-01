import React from 'react'
import { useTranslation } from 'react-i18next'
import "./about.css"
import Hugo from '../../assets/Hugo.png'

const About = () => {
  const { t } = useTranslation()

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
    <h2>{t('about_title')}</h2>
    <div className="about__main">
      <img src={Hugo} alt='Hugo Brajdic'></img>
      <div className="about__intro">
        {t('about_intro_1', { age })} <br></br>
        <div className="sub-text">
        {t('about_sub_text_1')} <br></br>
        {t('about_sub_text_2')} <br></br>
        {t('about_sub_text_3')}<br></br>
        {t('about_sub_text_4')} <br></br>
        {t('about_sub_text_5')}
          </div>
      </div>
    </div>

  </section>
  )
}

export default About