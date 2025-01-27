import React, { useContext, useState } from 'react'
import { FavoritosContext } from '../context/FavoritoContext'

export const AddFavorito = ({artigoFavoritado}) => {

    const { adicionarFavorito } = useContext(FavoritosContext)

    return (
        <button onClick={() => adicionarFavorito(artigoFavoritado)} className='rounded-pill border-0 px-3  py-1'> <i className="bi bi-heart-fill text-danger"></i> Favoritar</button>
    )
}
