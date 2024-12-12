import React from "react";
import "./styles.css"
import images from '../../json/images.json';
import categories from '../../json/categorias.json'
import { useParams } from 'react-router-dom';


export default function Fotos() {
    const { id } = useParams(); // Pega o ID da URL
    const category = categories.find((cat) => cat.id === parseInt(id)); // Encontra a categoria pelo ID
  
    if (!category) {
      return <p>Categoria não encontrada.</p>;
    }
  
    // Filtra as imagens que pertencem à categoria
    const filteredImages = images.filter((image) => image.category === category.category);
  
return (
    <div>
    <h1>{category.name}</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {filteredImages.map((image) => (
        <div key={image.id} style={{ textAlign: 'center' }}>
          <img
            src={image.url}
            alt={image.description}
            style={{ width: '150px', height: '150px', borderRadius: '8px' }}
          />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  </div>
)


}
