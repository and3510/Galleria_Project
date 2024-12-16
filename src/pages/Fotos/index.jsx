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
    <div className="info_fotos">
    <h1>{category.name}</h1>
    <div className="single_fotos" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {filteredImages.map((image) => (
        <div className="foto" key={image.id} style={{ textAlign: 'center' }}>
          <img
            src={image.url}
            alt={image.description}
            style={{ width: '150px', height: '150px', borderRadius: '8px' }}
          />
          <p>{image.description} - Localização: {image.location}</p>
        </div>
      ))}
    </div>
  </div>
)


}
