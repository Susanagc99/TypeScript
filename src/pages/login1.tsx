import React, { useState } from "react";
import { useRouter } from "next/router";
import { notifications, users } from "../helpers/utils"; // arreglo con usuarios y contraseñas
import { ToastContainer } from 'react-toastify';

const Login = () => {


    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    const handleClick = () => {


        //Validación campos vacio
        if (user == "" || password == "") {
            notifications("Debe ingresar usuario y contraseña","warn");
            return;
        }

        //Buscar si las credenciales están en users
        const foundUser = users.find(
            (item) => item.name === user && item.password === password
        );

        //Verificar y acceder o mensaje de credenciales inválidas
        if (foundUser) {
            console.log("Login exitoso")
            notifications("Inicio de sesión exitoso","success")
            setTimeout(() => {
                router.push("/dashboard");
              }, 1500); // 1.5 segundos para que se vea el toast

        } else {
            notifications("Credenciales incorrectas","error");
        }

    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Mi app</h1>

                <label>Usuario</label>
                <input value={user} onChange={handleChangeUser} type="text" />

                <label>Contraseña</label>
                <input value={password} onChange={handleChangePassword} type="password" />

                <button className="login-button" onClick={handleClick}>Ingresar</button>
                <ToastContainer />
            </div>
        </div>
    )

}

export default Login;