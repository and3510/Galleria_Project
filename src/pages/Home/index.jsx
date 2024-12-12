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

import categories from '../../json/categorias.json';

export default function Home() {


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
        <main>
          <div>
              <div className="gallery">
              {categories.map((category) => (
                  <div className="gallery-card" id={`card-${category.id}`}>
                  <h2 className="gallery-card-title">{category.name}</h2>
                  
                    <a href={`/fotos/${category.id}`} className="gallery-card-btn">Mais fotos</a>
                  
                </div>
              ))}
              </div>
            
          </div>
        </main>
      );


}
