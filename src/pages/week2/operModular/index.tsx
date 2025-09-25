import { multiplicar, sumar } from "../../../helpers/utils";
import React from "react";

export default function Login () {  
    const a = 2;
    const b = 10;

    const result = sumar(a,b)
    const result2 = multiplicar(a,b)


    console.log(result)
    console.log(result2)

    const handleclick = () => {
        console.log("Se hizo click")
    }


    return (
        <main>
            <h1 className="div">Login</h1>
            <div className="h2">Ingrese su usuario y contraseña</div>
            <input type="text" />
            <input type="password" />
            <button onClick={handleclick}>Ingresar</button>
        </main>
    )
}