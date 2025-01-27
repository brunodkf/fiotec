import React, { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritoContext';

const Favoritos = () => {

  const { favoritos, removerFavorito } = useContext(FavoritosContext)

  return (
    <div className="favoritos">

      <p className='fw-bold'>Meus Favoritos</p>

      <ul className=' list-unstyled'>
        {favoritos.map((item) => (
          <li key={item.id} className='d-flex align-items-center mb-4'>
            <img src={item.image} alt={item.title} style={{ width: '250px', height: '150px' }} />

            <div className="p-2">
              <div className="d-flex align-items-center justify-content-between">
                <p className='fw-bold'>{item.title}</p>
                <button onClick={() => removerFavorito(item.id)} className='mb-2'>
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>

              <p>
                {
                  item.description
                }
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favoritos;
