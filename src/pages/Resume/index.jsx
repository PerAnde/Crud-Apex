import React from 'react'

import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BiSend } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'

import './style.css'
import '../globalPages.css'

import Img from '../../assets/images/profile.jpg'
import Html5 from '../../assets/images/html5.png'
import Css3 from '../../assets/images/css3.png'
import JavaScript from '../../assets/images/javaScript.png'
import NodeJs from '../../assets/images/node.png'
import ReactJs from '../../assets/images/react.png'

export const Resume = () => {
    return (
        <section className='mainSection'>
            <div className='mainBox'>
                <div className="boxContent">
                    <h1>Meu Currículo</h1>
                    <div className="resume">
                        <div className="header">
                            <div className="boxProfile">
                                <img src={Img} />
                                <div className="name">
                                    <h2>Anderson<br></br><span>Pereira</span></h2>
                                </div>
                            </div>
                            <div className="resumeInfos">
                                <p><AiOutlineWhatsApp className='icon' />(47) 9 9222-0209</p>
                                <p><BiSend className='icon' />contato3dap@gmail.com</p>
                                <p><AiOutlineInstagram className='icon' />ande_p</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="resumeContent">
                            <h2>Experiência Profissional</h2>
                            <p><span>Ago/2011 - Mar/2012</span> - Carol Embalagens (Embalador)</p>
                            <p><span>Abr/2012 - Jun/2012</span> - JG Embalagens (Expedidor)</p>
                            <p><span>Jul/2012 - Nov/2018</span> - Ximix Sublimação (Designer Gráfico)</p>
                            <p><span>Ago/2019 - Atualmente</span> - NetHand Serviços de Internet Ltda (Suporte Técnico)</p>
                            <hr></hr>
                            <h2>Skills</h2>
                            <div className="skills">
                                <div>
                                    <img src={Html5} /><p>Avançado</p>
                                </div>
                                <div>
                                    <img src={Css3} /><p>Avançado</p>
                                </div>
                                <div>
                                    <img src={JavaScript} /><p>Iniciante</p>
                                </div>
                                <div>
                                    <img src={NodeJs} /><p>Iniciante</p>
                                </div>
                                <div>
                                    <img src={ReactJs} /><p>Iniciante</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
