import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Importando Images
import Logo from '../../assets/images/logo.png'
import ImgProfile from '../../assets/images/profile.jpg'

// Importando Icons
import { MdOutlineContactPage } from 'react-icons/md'
import { BiHomeAlt } from 'react-icons/bi'
import { BiSend } from 'react-icons/bi'

// Importando Css
import './style.css'

export const MenuLateral = () => {

    return (
        <div className="sidebar">
            <div className='logo'>
                <img src={Logo} />
                <span>CRUD</span>
            </div>
            <Link to='/resume'>
                <div className="profile">
                    <div className="imgProfile">
                        <img src={ImgProfile} alt="" />
                    </div>
                    <div className="descriptionProfile">
                        <span className='nameProfile'>Anderson</span>
                        <span className='nivelProfile'>Admin</span>
                    </div>
                </div>
            </Link>
            <nav>
                <ul className='navLinks'>
                    <li>
                        <div className="item">
                            <Link to='/'>
                                <BiHomeAlt className='icon' />
                                <span>Home</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='item'>
                            <Link to='/resume'>
                                <MdOutlineContactPage className='icon' />
                                <span>Currículo</span>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='item'>
                            <Link to='/contact'>
                                <BiSend className='icon' />
                                <span>Contato</span>
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
