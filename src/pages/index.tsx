import React, { useState } from "react";
import { useRouter } from "next/router";
import { users } from "../helpers/utils"; // arreglo con usuarios y contraseñas

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
            alert("Debe ingresar usuario y contraseña")
        }

        //Buscar si las credenciales están en users
        const foundUser = users.find(
            (u) => u.name === user && u.password === password
        );

        //Verificar y acceder o mensaje de credenciales inválidas
        if (foundUser) {
            console.log("Login Exitoso");
            router.push("/dashboard");
        } else {
            console.log("Credenciales incorrectas");
            alert("Usuario o contraseña inválidos")
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

                <button onClick={handleClick}>Ingresar</button>
            </div>
        </div>
    )

}

export default Login;