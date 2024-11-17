import React from "react";
import { useState } from "react";
import { db } from '../../firebaseConnection'
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'
import "./styles.css"
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate();

    async function resgister() {
        //    await setDoc(doc(db, "doc", "12345"), {
        //     email: email,
        //     senha: senha,

        //    })
        //    .then( () => {
        //     console.log("deu certo")
        //    })
        //    .catch( () => {
        //     console.log("deu errado")
        //    })
        // }

        await addDoc(collection(db, "doc"), {
                email: email,
                senha: senha,
            })
            .then( () =>  {
                console.log("deu certo")
                setEmail("")
                setSenha("")
                navigate('/login');
            })
            .catch( () => {
                console.log("nao deu certo")
        })
    }

return (
    <div className="container">
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


        <button onClick={resgister}>Sign Up</button>

    </div>
)


}
