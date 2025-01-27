import React, { createContext, useState, useContext, useEffect } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = 'Favoritos'

export const FavoritosProvider = ({ children }) => {

    const [favoritos, setFavoritos] = useState(() => {
        const storedFavoritos = localStorage.getItem('favoritos');
        return storedFavoritos ? JSON.parse(storedFavoritos) : [];
    });

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }, [favoritos]);

    const adicionarFavorito = (novoFavorito) => {
        if (!favoritos.find((item) => item.id === novoFavorito.id)) {
            setFavoritos([...favoritos, novoFavorito]);
        }
    };

    const removerFavorito = (id) => {
        setFavoritos(favoritos.filter((item) => item.id !== id));
    };

    return (
        <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
};
