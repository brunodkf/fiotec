import { Outlet } from 'react-router';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar } from './components/Navbar';
import { Filtros } from './components/Filtros';

import './App.css'
import { useState } from 'react';


function App() {

  const [atualizaFiltro, setAtualizaFiltro] = useState('Todos')
  const [cardFilter, setCardFilter] = useState('')


  const mudancaDeFiltro = (filter) => {
    setAtualizaFiltro(filter)
  }

  return (
    <>
      <section className='main overflow-x-hidden'>
        <Navbar />

        <div className="main__container container d-flex gap-5">

          <Filtros mudancaDeFiltro={mudancaDeFiltro} />

          <Outlet context={{ atualizaFiltro }} />
        </div>
      </section>
    </>
  )
}

export default App
