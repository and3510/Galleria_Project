import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { db, auth } from '../../firebaseConnection'
import { useNavigate } from 'react-router-dom';
import minhaImagem from "../../assets/personal.png";
import "./styles.css"
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export default function Sobre() {
    const [user, setUser] = useState(false);
    const [userDetail, setUserDetail] = useState({})
    const navigate = useNavigate();
  
  
      useEffect(() => {
          async function checkLogin() {
              onAuthStateChanged(auth, (user) => {
                  if (user) {
                      console.log(user)
                      setUser(true)
                      setUserDetail({
                          uid: user.uid,
                          email: user.email
                      })
  
  
                  }
                  else {
                      setUser(false)
                      setUserDetail({})
                      navigate('/')
                  }
              })
          }
  
          checkLogin();
      }, [])
      
return (
    <div className="services-container">
    <h1>Sobre mim</h1>
    <div className="services-blocks">
        <div className="service-block">
            <h2>Sobre o Fotógrafo</h2>
            <p >João Silva é um fotógrafo renomado, especializado em fotografia de retratos e paisagens. Com mais de 10 anos de experiência, sua paixão é capturar momentos que contam histórias.</p>
        </div>
        <div className="service-block">
            <img src={minhaImagem} alt="" />
        </div>
        <div className="service-block">
            <h2>Qualidades</h2>
            <ul class="qualities-list">
                <li class="quality-item">Profissionalismo</li>
                <li class="quality-item">Comprometimento</li>
                <li class="quality-item">Pontualidade</li>
                <li class="quality-item">Criatividade</li>
            </ul>


        </div>
    </div>
    </div>


)


}
