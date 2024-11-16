// src/components/Gallery.tsx
import React, { useState } from 'react';
import './Gallery.css';
import { FaPlus, FaSave, FaTrashAlt } from 'react-icons/fa';

const Gallery: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Estado para controle de loading
    const [fileInputKey, setFileInputKey] = useState<number>(0); // Chave para resetar o input

    const addImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setLoading(true); // Inicia o loading
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages(prevImages => [...prevImages, reader.result as string]);
                setLoading(false); // Finaliza o loading
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileClick = () => {
        setLoading(true); // Inicia o loading ao clicar para abrir o seletor de arquivos
        setTimeout(() => {
            setLoading(false); // Finaliza o loading após 500ms
        }, 500);
    };

    const removeImage = (index: number) => {
        const confirmDelete = window.confirm("Tem certeza que deseja remover esta imagem?");
        if (confirmDelete) {
            const newImages = images.filter((_, i) => i !== index);
            setImages(newImages);
        }
    };

    const saveGallery = () => {
        if (images.length === 0) {
            alert("Adicione pelo menos uma imagem antes de salvar.");
            return;
        }
        alert("Galeria salva com sucesso!");
    };

    return (
        <div className="gallery-container">
            <h2>Galeria de Imagens</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="image-box" key={index}>
                        <img src={image} alt={`Imagem ${index + 1}`} className="gallery-image" />
                        <span className="delete-icon" onClick={() => removeImage(index)} title="Remover Imagem">
                            <FaTrashAlt />
                        </span>
                    </div>
                ))}
                <div className="image-box add">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={addImage}
                        style={{ display: 'none' }} // Oculta o input
                        id="image-upload"
                        key={fileInputKey} // Chave para resetar o input
                    />
                    <label 
                        htmlFor="image-upload" 
                        className="add-icon" 
                        title="Adicionar Imagem" 
                        onClick={handleFileClick} // Adiciona o evento de clique
                    >
                        <FaPlus />
                    </label>
                </div>
            </div>
            {loading && <div className="loading">Carregando...</div>} {/* Indicador de loading */}
            <button className="save-button" onClick={saveGallery}>
                <FaSave /> Salvar
            </button>
        </div>
    );
};

export default Gallery;
