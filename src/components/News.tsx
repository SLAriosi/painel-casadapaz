// src/components/News.tsx
import React, { useState } from 'react';
import './News.css';
import { FaPlus, FaTrashAlt } from 'react-icons/fa'; // Importando ícones

type NewsItem = {
    title: string;
    content: string;
};

const News: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState<string | null>(null); // Estado para mensagens de erro

    const addNews = () => {
        if (title.trim() === '' || content.trim() === '') {
            setError('Por favor, preencha todos os campos.'); // Mensagem de erro se campos vazios
            return;
        }

        setNews([...news, { title, content }]);
        setTitle('');
        setContent('');
        setError(null); // Limpa o erro após adicionar
    };

    const removeNews = (index: number) => {
        setNews(news.filter((_, i) => i !== index));
    };

    return (
        <div className="news-container">
            <h2>Gerenciamento de Notícias</h2>
            {error && <div className="error-message">{error}</div>} {/* Exibe mensagem de erro */}
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Título da Notícia"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Conteúdo da Notícia"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button onClick={addNews}>
                    <FaPlus /> Adicionar Notícia
                </button>
            </div>
            <ul className="news-list">
                {news.map((item, index) => (
                    <li className="news-list-item" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <button className="remove-button" onClick={() => removeNews(index)}>
                            <FaTrashAlt /> Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
