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

    
    <h1>Servicos</h1>
)


}
