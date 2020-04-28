import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import heroesImg from '../../assets/Hero.jpg';
import logoImg from '../../assets/Logo.png';

export default function Logon(){
    return (
        <div className="logon-controller">
             <section className="form">
             <img src={heroesImg} alt="Logo"/>
             <form>
                 <h1>Faça Login</h1>

                 <input placeholder="Seu ID" />
                 <button className="button" type="submit">Entrar</button>

                 <a href="/registrar">
                     <FiLogIn size={16} color="#E02041" />
                      Não tenho cadastro
                 </a>
             </form>
             </section>

             <img src={logoImg} alt="Heroes"/>
        </div>
    );
}