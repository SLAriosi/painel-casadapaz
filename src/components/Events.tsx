// src/components/Events.tsx
import React, { useState } from 'react';
import './Events.css';
import { FaPlus, FaTrashAlt } from 'react-icons/fa'; // Importando ícones

type Event = {
    name: string;
    date: string;
};

const Events: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState<string | null>(null); // Estado para mensagens de erro

    const addEvent = () => {
        if (name.trim() === '' || date.trim() === '') {
            setError('Por favor, preencha todos os campos.'); // Mensagem de erro se campos vazios
            return;
        }

        setEvents([...events, { name, date }]);
        setName('');
        setDate('');
        setError(null); // Limpa o erro após adicionar
    };

    const removeEvent = (index: number) => {
        setEvents(events.filter((_, i) => i !== index));
    };

    return (
        <div className="events-container">
            <h2>Gerenciamento de Eventos</h2>
            {error && <div className="error-message">{error}</div>} {/* Exibe mensagem de erro */}
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Nome do Evento"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button onClick={addEvent}>
                    <FaPlus /> Adicionar Evento
                </button>
            </div>
            <ul className="events-list">
                {events.map((event, index) => (
                    <li className="events-list-item" key={index}>
                        <h3>{event.name}</h3>
                        <p>Data: {event.date}</p>
                        <button className="remove-button" onClick={() => removeEvent(index)}>
                            <FaTrashAlt /> Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
