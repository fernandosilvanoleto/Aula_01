import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styless.css';

import logoImg from '../../assets/Logo.png';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreve o caso corretamente!!!</p>
                    <Link className="back-link" to="/profile">
                     <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>
                <form>
                    <input placeholder="Titulo do Caso" />
                    <textarea placeholder="Descricao" />
                    <input placeholder="Valor em reais" />                    
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}