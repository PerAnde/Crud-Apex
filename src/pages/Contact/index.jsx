import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// Importando Axios
import axios from 'axios'

// Importando Css
import './style.css'
import '../globalPages.css'

// Importando Icones
import { BiEditAlt } from 'react-icons/bi'
import { BiTrashAlt } from 'react-icons/bi'

export const Contact = () => {

    //Pegar dados dos inputs
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputTel, setInputTel] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    // Buscar e  listar todos os usuarios
    const [lista, setLista] = useState([])

    const atualizarLista = () => {
        axios.get('http://localhost:3001/sistema/usuarios').then((response) => {
            setLista(response.data);
        });
    }

    useEffect(atualizarLista, [])

    // Cadastrar usuario no banco
    const cadastrar = async (event) => {
        event.preventDefault()
        if (inputName.length === 0 || inputEmail.length === 0 || inputTel.length === 0 || inputMessage.length === 0) {
            alert('Favor preencher todos os campos do formulário!')
            return
        }
        try {
            await axios.post(`http://localhost:3001/sistema/usuarios`, {
                name: inputName,
                email: inputEmail,
                tel: inputTel,
                message: inputMessage
            })

                .then(atualizarLista, [])

            setInputName('')
            setInputEmail('')
            setInputTel('')
            setInputMessage('')

            alert('Contato cadastrado com sucesso!')

        } catch (error) {
            alert(error.message)
        }
    }

    // Excluir Usuario
    const excluirUsuario = (id) => {
        if (window.confirm("Você tem certeza que deseja excluir esse contato?")) {
            axios.delete('http://localhost:3001/sistema/usuarios/' + id)
                .then(atualizarLista, [])
        }
    }

    return (
        <section className='mainSection'>
            <div className='mainBox'>
                <div className="boxContent">
                    <h1>Contato</h1>
                    <p>Preencha os campos abaixo e cadastre seus dados</p>
                    <form onSubmit={cadastrar}>
                        <input type="text" name='name' placeholder='Nome' onChange={(e) => setInputName(e.target.value)} value={inputName} />
                        <input type="email" name='email' placeholder='E-mail' onChange={(e) => setInputEmail(e.target.value)} value={inputEmail} />
                        <input type="text" name='tel' placeholder='Telefone' onChange={(e) => setInputTel(e.target.value)} value={inputTel} />
                        <textarea name="message" id="" cols="30" rows="10" onChange={(e) => setInputMessage(e.target.value)} value={inputMessage}></textarea>
                        <button>Enviar</button>
                    </form>
                    <hr></hr>
                    <h2>Lista de cadastros</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Mensagem</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map((usuarios, key) => {
                                return (
                                    <tr key={usuarios.id}>
                                        <td>{usuarios.name}</td>
                                        <td>{usuarios.message}</td>
                                        <td className='acoes'>
                                            <BiEditAlt className='icon edit' />
                                            <BiTrashAlt className='icon delete' onClick={() => excluirUsuario(usuarios.id)} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
