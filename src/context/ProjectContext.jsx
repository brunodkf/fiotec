import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

export const FiotecContext = createContext()
FiotecContext.displayName = 'FioTec'

export const FiotecProvider = ({ children }) => {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const [postsResposta] = await axios.all([
                    axios.get(`http://localhost:3000/projetos`),
                ])

                setProjetos(postsResposta.data)

            } catch (error) {
                console.error("Erro ao buscar dados:", error); 
            }
        }

        getPosts();

    }, [])

  

    return (
        <FiotecContext.Provider value={{ projetos }}>
            {children}
        </FiotecContext.Provider>
    )
}