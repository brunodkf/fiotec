import React from 'react'
import { useLocation } from 'react-router';

const Destaque = () => {

  const location = useLocation();
  const { projeto } = location.state || {};

  return (
    <div className='destaque'>
      <div className="d-flex justify-content-between  p-2">
        <p className='fw-bold'>Projetos em Destaque</p>
      </div>

      <div className="destaque__artigo">
        <img src={projeto.image} alt="" />

        <p className='pt-4'>{projeto.description}</p>
      </div>

    </div>
  )
}


export default Destaque