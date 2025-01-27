import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FiotecProvider } from './context/ProjectContext.jsx';
import { FavoritosProvider } from './context/FavoritoContext.jsx';

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Projetos from './pages/Projetos.jsx'
import Favoritos from './pages/Favoritos.jsx'
import Destaque from './pages/Destaque.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FiotecProvider>
        <FavoritosProvider>
          <Routes>
            <Route element={<App />}>
              <Route path='/' element={<Home />} />
              <Route path='/Projetos' element={<Projetos />} />
              <Route path='Projetos/:id' element={<Destaque />} />
              <Route path='/Favoritos' element={<Favoritos />} />
            </Route>
          </Routes>
        </FavoritosProvider>
      </FiotecProvider>
    </BrowserRouter>
  </React.StrictMode>,
)