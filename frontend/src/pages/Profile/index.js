import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styless.css';

import logoImg from '../../assets/Logo.png';

export default function Profile(){
    const ongName = localStorage.getItem('ongName');

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Logo" />
                <span>Bem-Vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"></FiPower>
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste 1</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste 1</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste 2</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste 2</p>

                    <strong>VALOR:</strong>
                    <p>R$ 420,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste 3</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste 3</p>

                    <strong>VALOR:</strong>
                    <p>R$ 20,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste 4</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste 4</p>

                    <strong>VALOR:</strong>
                    <p>R$ 1200,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}