import React from 'react'
import useOpenController from '../../hooks/useOpenController'
import { Competence } from './Competence';

const Topic = ({ topic }) => {
  const { isOpen, toogle } = useOpenController(false);
  return (
    <li className={`topic ${topic.styleName}`}>
      <div className="topic__header" onClick={toogle} >
        <i className="fa-solid fa-chevron-right topic__chevron" style={{ transform: `rotate(${isOpen ? '90' : '0'}deg)` }}></i>
        <h4>{topic.title}</h4>
      </div>
      {isOpen &&
        <div className='topic__content'>
          <ul>
            {topic.competences.map((competence) => {
              return <>
                <Competence competence={competence}></Competence>
              </>
            })}

          </ul>
        </div>
      }

    </li>
  )
}

export default Topic