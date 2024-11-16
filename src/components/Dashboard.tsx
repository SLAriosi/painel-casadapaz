import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'; // Adicionado useNavigate
import { FaHome, FaNewspaper, FaCalendarAlt, FaImages, FaSignOutAlt } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    const navigate = useNavigate(); // Hook para navegação
    const handleLogout = () => {
        // Remove o token de autenticação
        localStorage.removeItem('auth_token');
        
        // Redireciona o usuário para a página de login
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar">
                <div className="dashboard-logo">
                    <img src="/logo.png" alt="Logo Casa da Paz" />
                </div>
                <nav className="dashboard-nav">
                    <NavLink to="/dashboard/home" className="nav-link">
                        <FaHome className="nav-icon" /> Home
                    </NavLink>
                    <NavLink to="/dashboard/news" className="nav-link">
                        <FaNewspaper className="nav-icon" /> Notícias
                    </NavLink>
                    <NavLink to="/dashboard/events" className="nav-link">
                        <FaCalendarAlt className="nav-icon" /> Eventos
                    </NavLink>
                    <NavLink to="/dashboard/gallery" className="nav-link">
                        <FaImages className="nav-icon" /> Galeria
                    </NavLink>
                </nav>
                <button className="dashboard-logout-button" onClick={handleLogout}>
                    <FaSignOutAlt className="logout-icon" /> Sair da Conta
                </button>
            </aside>
            <main className="dashboard-content">
                <Outlet /> {/* Este componente vai renderizar as páginas filhas do Dashboard */}
            </main>
        </div>
    );
};

export default Dashboard;
