import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConnection';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import "./styles.css";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [user, setUser] = useState(false);
    const [userDetail, setUserDetail] = useState({});
    const navigate = useNavigate();

    async function login() {
        await signInWithEmailAndPassword(auth, email, senha)
            .then((value) => {
                console.log("Login bem-sucedido:", value.user);

                setUserDetail({
                    uid: value.user.uid,
                    email: value.user.email,
                });
                setUser(true);
                setEmail('');
                setSenha('');
                navigate('/home');
                toast.success("Login realizado com sucesso!", { theme: "dark" });
            })
            .catch(() => {
                console.error("Erro no login");
                toast.warn("Falha ao realizar login. Verifique suas credenciais.", { theme: "dark" });
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Usuário autenticado:", user);
                setUser(true);
                setUserDetail({
                    uid: user.uid,
                    email: user.email,
                });
                navigate('/home');
            } else {
                setUser(false);
                setUserDetail({});
            }
        });
    }, [navigate]);

    return (
        <div className="container">
            <h1>Login</h1>

            <label>Email:</label>
            <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha:</label>
            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <button onClick={login}>Login</button>


            <p>Não tem uma conta? <Link to="/signup" className="active">Cadastre-se aqui</Link>.</p>
        </div>
    );
}
