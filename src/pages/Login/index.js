import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { db, auth } from '../../firebaseConnection'
import { doc, setDoc, collection, addDoc, getDocs } from 'firebase/firestore'
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [user, setUser] = useState(false);
    const [userDetail, setUserDetail] = useState({})
    const navigate = useNavigate();

    async function login() {

        await signInWithEmailAndPassword(auth, email, senha)
        .then((value) => {
            console.log("login deu certo")
            console.log(value.user)

            setUserDetail({
                uid: value.user.uid,
                email: value.user.email,
            })
            setUser(true);
            setEmail('')
            setSenha('')
            navigate('/home');
            toast.success("Login feito", {
                theme: "dark"
            })
        })
        .catch(() => {
            console.log("login deu errado")
            toast.warn("Login negado", {
                theme: "dark"
            })
        })
    }

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
                    navigate('/home');

                }
                else {
                    setUser(false)
                    setUserDetail({})
                }
            })
        }

        checkLogin();
    }, [])

    return(
        <div className="container">
        <h1> Login </h1>

        {/* {user && (
            <div> 
                <strong>Seja bem-vindo </strong> <br/>
                <span> ID: {userDetail.uid} - Email: {userDetail.email}</span>
                <br/> <br/>
            </div>
        )} */}

        <label>Email:</label>
        <input
            type="text" 
            placeholder="Digite email" 
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input 
            type="password" 
            placeholder="Digite Senha" 
            value={senha}
            onChange={ (e) => setSenha(e.target.value)}
        />

        

        <button onClick={login}>Login</button>

        
        <p>Se não tiver uma conta. Cadastra-se aqui  <Link to="/signup" className="active">Sign up</Link> </p>
        


    </div>
    )
}