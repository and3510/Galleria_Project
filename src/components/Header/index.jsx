import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importe os ícones do react-icons
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { db, auth } from '../../firebaseConnection'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./styles.css"
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export default function Header() {

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

    async function logout() {
      await signOut(auth)
      setUser(false)
      setUserDetail({})
      toast.success("LogOut com sucesso", {
        theme: "dark"
      })

      
    }

  return (
    <header className="header">
      <Link to="/" className="header-brand">Galleria</Link>
      <nav className="header-navbar">
        <ul>
          <li>
            <Link to="/home" className="active">Home</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>


      <div className="header-social-media">
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} />
            </a>
          </li>
        </ul>
      </div>


        {user && (

            <nav className="header-navbar-login-singup">
            <ul>
                <li>
                  <Link onClick={logout} className="active">Logout</Link>
                </li>
            </ul>
            </nav>
        )}


    </header>
  );
}
