import React, { act, useState } from 'react'
import Logo from '/logo-fiotec.svg'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [activeItem, setActiveItem] = useState(0);

    const menuItems = [
        { id: 0, label: 'Home', path: '/' },
        { id: 1, label: 'Projetos em Destaque', path: '/Projetos' },
        { id: 2, label: 'Meus Favoritos', path: '/Favoritos' }
    ]



    return (
        <section className="navbar text-white p-4 shadow">
            <div className="container d-flex justify-content-between align-items-center">


                <nav>

                    <img className='me-5' src={Logo} alt="Logo Fiotec" style={{paddingRight: '60px'}}/>

                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => setActiveItem(item.id)}
                            className={`navbar__link mx-3 fw-bold text-decoration-none ${activeItem === item.id ? 'text-primary' : 'text-black'}`} // Aplica a classe condicional
                        >
                            {item.label}
                        </Link>
                    ))}

                </nav>

                <i className="bi bi-person-circle fs-1 text-black" ></i>
            </div>
        </section>
    )
}
