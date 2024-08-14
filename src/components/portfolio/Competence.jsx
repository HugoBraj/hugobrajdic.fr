import React from 'react'
import useOpenController from '../../hooks/useOpenController';

export const Competence = ({ competence }) => {
    const { isOpen, toogle } = useOpenController(false);
    return (
        <div className='ac'>
            <div className="ac__header" onClick={toogle}>
            <i className="fa-solid fa-chevron-right topic__chevron" style={{ transform: `rotate(${isOpen ? '90' : '0'}deg)` }}></i>
                {competence.title}
            </div>
            {isOpen &&
            <div className="ac__content">
                <table class="tftable" border="1">
                    <tr><th>Apprentissage Critique</th><th>Début d'année</th><th>Fin d'année</th><th>Projets ou exercices liés</th></tr>
                    {competence.acs.map((ac) => {
                        return <tr><td>{ac.title}</td><td>{ac.beginning}</td><td>{ac.end}</td><td>{ac.project}</td></tr>
                    })}
                </table>
            </div>}
            
        </div>
    )
}
