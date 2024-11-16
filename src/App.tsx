// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import News from './components/News';
import Events from './components/Events';
import Gallery from './components/Gallery';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="home" element={<Home />} />
                    <Route path="news" element={<News />} />
                    <Route path="events" element={<Events />} />
                    <Route path="gallery" element={<Gallery />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
