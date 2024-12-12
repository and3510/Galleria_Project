import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { db, auth } from '../../firebaseConnection'
import { useNavigate } from 'react-router-dom';
import "./styles.css"
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export default function Servicos() {
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
                } else {
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
            <h1>Meus Serviços</h1>
            <div className="services-blocks">
                <div className="service-block">
                    <h2>Ensaios Fotográficos</h2>
                    <p>Capture momentos únicos com um ensaio profissional em estúdio ou ao ar livre.</p>
                    <button>Saiba mais</button>
                </div>
                <div className="service-block">
                    <h2>Fotografia de Eventos</h2>
                    <p>Registre cada detalhe de aniversários, casamentos e outros eventos especiais.</p>
                    <button>Saiba mais</button>
                </div>
                <div className="service-block">
                    <h2>Álbuns Personalizados</h2>
                    <p>Transforme suas memórias em álbuns fotográficos exclusivos e de alta qualidade.</p>
                    <button>Saiba mais</button>
                </div>
            </div>
        </div>
    )
}