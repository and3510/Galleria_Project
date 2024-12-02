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


export default function Contato() {

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
    <div class="container">
        <div class="contact-info">
            <h2>Entre em Contato</h2>
            <p>Gostaria de saber mais sobre os serviços ou agendar uma sessão? Preencha o formulário ou entre em contato pelos meios abaixo:</p>
            <ul>
            <li><strong>Email:</strong> joaosilva@example.com</li>
            <li><strong>Telefone:</strong> (11) 98765-4321</li>
            <li><strong>Endereço:</strong> Rua da Fotografia, 123, São Paulo, SP</li>
            </ul>
        </div>
        <div class="contact-form">
            <h2>Formulário de Contato</h2>
            <form action="#" method="post">
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" required />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Seu email" required />

            <label for="message">Mensagem</label>
            <textarea id="message" name="message" rows="5" placeholder="Sua mensagem" required></textarea>

            <button type="submit">Enviar</button>
            </form>
        </div>
    </div>

)


}
