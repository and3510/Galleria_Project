import React from "react";
import { useState } from "react";
import { db, auth } from '../../firebaseConnection'
import { doc, setDoc, collection, addDoc, getDocs } from 'firebase/firestore'
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    createUserWithEmailAndPassword,
} from 'firebase/auth'


export default function SignUp() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    // const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    async function resgister() {
        await createUserWithEmailAndPassword(auth, email, senha)
        .then( () => {
            console.log("deu certo o create")
            setEmail("")
            setSenha("")
            toast.success("Usuario Cadastrado com sucesso!", {
                theme: "dark"
            })
            navigate("/")
        })
        .catch( (error) => {
            console.log("deu errado o create")
            if (error.code === 'auth/weak-password') {
                toast.warn(`senha fraca. tem que ter no minino 6 digitos`, {
                    theme: "dark"
                })
            }
            else if (error.code === 'auth/email-already-in-use') {
                toast.warn(`email já cadastrado`, {
                    theme: "dark"
                })
            }
        })


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

        // await addDoc(collection(db, "doc"), {
        //         email: email,
        //         senha: senha,
        //     })
        //     .then( () =>  {
        //         console.log("deu certo")
        //         setEmail("")
        //         setSenha("")
        //         navigate('/login');
        //     })
        //     .catch( () => {
        //         console.log("nao deu certo")
        // })
    }


    async function buscarPost(){
        // const postRef = doc(db, "posts", "vFvZAyFqebXFsFv0X89l")
        // await getDoc(postRef)
        // .then((snapshot) => {
        //   setAutor(snapshot.data().autor)
        //   setTitulo(snapshot.data().titulo)
    
        // })
        // .catch(()=>{
        //   console.log("ERRO AO BUSCAR")
        // })
    
        // const postsRef = collection(db, "doc")
        // await getDocs(postsRef)
        // .then((snapshot) => {
        //   let lista = [];
    
        //   snapshot.forEach((doc) => {
        //     lista.push({
        //       id: doc.id,
        //       senha: doc.data().senha,
        //       nome: doc.data().nome,
        //     })
        //   })
    
        //   setPosts(lista);
    
        // })
        // .catch((error) => {
        //   console.log("DEU ALGUM ERRO AO BUSCAR")
        // })
    
    
      }

return (
    <div className="container">

        <h1>Cadastro</h1>

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

        {/* <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id}>
                        <span>Nome: {post.nome}</span>
                        <span>Senha: {post.senha}</span>
                    </li>
                )
            })}
        </ul> */}

    </div>
)


}
