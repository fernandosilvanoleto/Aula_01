import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styless.css';

import logoImg from '../../assets/Logo.png';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ondId');

    async function hendleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
            ongId,
        }
        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');

        } catch(err) {
            alert('Houve erro ao cadastrar!!!');
        }
    }

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
                    <input 
                        placeholder="Titulo do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descricao" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />                        
                  <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />                    
                    <button onClick={hendleNewIncident} className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}