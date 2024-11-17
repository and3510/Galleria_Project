import React from "react";
import "./styles.css"


export default function Home() {
    return (
        <main>
          <div className="gallery">
            <div className="gallery-card" id="card-1">
              <h2 className="gallery-card-title">Animais</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
            <div className="gallery-card" id="card-2">
              <h2 className="gallery-card-title">Arquitetura</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
            <div className="gallery-card" id="card-3">
              <h2 className="gallery-card-title">Cidades</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
            <div className="gallery-card" id="card-4">
              <h2 className="gallery-card-title">Decorações</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
            <div className="gallery-card" id="card-5">
              <h2 className="gallery-card-title">Esportes</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
            <div className="gallery-card" id="card-6">
              <h2 className="gallery-card-title">Natureza</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
            <div className="gallery-card" id="card-7">
              <h2 className="gallery-card-title">Paisagem</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
            <div className="gallery-card" id="card-8">
              <h2 className="gallery-card-title">Pessoas</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
            <div className="gallery-card" id="card-9">
              <h2 className="gallery-card-title">Refeições</h2>
              <a href="#" className="gallery-card-btn">Mais fotos</a>
            </div>
          </div>
        </main>
      );


}
