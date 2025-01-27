import React, { useContext } from 'react'
import { FiotecContext } from '../context/ProjectContext';
import { Link, useOutletContext } from 'react-router';
import { AddFavorito } from '../components/AddFavorito';

export const Projetos = () => {

  const { projetos } = useContext(FiotecContext);

  const { atualizaFiltro } = useOutletContext();

  const filtroAplicado = projetos.filter((projeto) => {
    if (atualizaFiltro === "Todos") return true;
    return projeto.category === atualizaFiltro;
  });



  return (
    <div className='home'>
      <div className="d-flex justify-content-between  p-2">
        <p className='fw-bold'>Projetos em Destaque</p>
        <p>Mostrando {filtroAplicado.length} de {filtroAplicado.length} resultados</p>
      </div>

      <div className="projetos row p-2">
        {
          filtroAplicado?.map((item, index) => {
            return (
              <div className="col-4 gy-4 mb-4" key={index}>
                <img className='img-fluid' src={item.image} alt="" />
                <p className='fw-bold text-center pt-2'>
                  {
                    item.title.length >= 60 ? `${item.title.slice(0, 50)}` : item.title
                  }
                </p>

                <p className='text-center'>
                  {
                    item.description.length >= 70 ? `${item.description.slice(0, 55)}` : item.description
                  }
                </p>

                <div className="d-flex justify-content-around">

                  <Link to={`/Projetos/${item.id}`} state={{ projeto: item }}>
                    <button className='rounded-pill border-0 px-3 py-1'> <i className="bi bi-eye "></i>  Acessar</button>
                  </Link>

                  <AddFavorito artigoFavoritado={item} />
                </div>

              </div>
            )
          })
        }
      </div>


    </div>
  )
}


export default Projetos