import React from 'react'
import Iframe from 'react-iframe'

import './style.css'
import '../globalPages.css'

export const Home = () => {
    return (
        <section className='mainSection'>
            <div className='mainBox'>
                <div className="boxContent">
                    <h1>Projeto desenvolvido durante o curso na Apex</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id.<br></br><br></br> Velit libero omnis reiciendis earum doloribus doloremque voluptates culpa totam! Voluptatibus, explicabo odio non voluptatum expedita atque nobis temporibus voluptatem.</p>
                    <div className="video">
                        <Iframe width="100%" height="550px" src="https://www.youtube.com/embed/3pD2uWtbQa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
