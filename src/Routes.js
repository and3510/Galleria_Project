import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Fotos from "./pages/Fotos";
import Servicos from './pages/Servicos';
import Header from './components/Header';
import Footer from './components/Footer';


export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<Servicos />} />

      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
