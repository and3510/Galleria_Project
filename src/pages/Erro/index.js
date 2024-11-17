import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"


export default function Erro() {
return (
    <div className="conteiner-erro">
        <h1>404</h1>
        <h2>Pagina não Encontrada!</h2>
        <Link to="/">Ir para Pagina Inicial!</Link>
    </div>
)


}
