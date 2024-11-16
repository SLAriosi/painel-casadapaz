// src/components/Home.tsx
import React from 'react';
import './Home.css';
import { FaUsers, FaNewspaper, FaCalendarAlt } from 'react-icons/fa'; // Importando ícones

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Bem-vindo ao Painel Administrativo</h1>
            <div className="home-stats">
                <div className="home-stat-box">
                    <FaUsers className="stat-icon" />
                    <h2>Usuários Registrados</h2>
                    <p>1,245</p>
                </div>
                <div className="home-stat-box">
                    <FaNewspaper className="stat-icon" />
                    <h2>Postagens de Notícias</h2>
                    <p>128</p>
                </div>
                <div className="home-stat-box">
                    <FaCalendarAlt className="stat-icon" />
                    <h2>Eventos Ativos</h2>
                    <p>23</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
