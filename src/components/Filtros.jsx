import React, { useContext } from 'react'
import { FiotecContext } from '../context/ProjectContext';
import { useLocation } from 'react-router';

export const Filtros = ({ mudancaDeFiltro }) => {

    const categorias = [
        "Todos",
        'Ensino',
        'Pesquisa',
        'Estímulo à Inovação',
        'Extensão',
        'Desenvolvimento Institucional',
        " Desenvolvimento Científico e Tecnológico"
    ]

    const location = useLocation();

    if (location.pathname != '/Favoritos') {
        return (
            <div className={`filtros`}>
                <p className='fw-bold'>Filtros por Categoria</p>

                <ul className="filtros__lista list-unstyled">
                    {categorias.map((categoria) => (
                        <li
                            key={categoria}
                            onClick={() => mudancaDeFiltro(categoria)}
                            className='filtros__lista--item'
                            style={{ cursor: 'pointer' }}
                        >
                            {categoria}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
