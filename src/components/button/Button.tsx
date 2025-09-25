import { JSX } from "react"
import React from "react";

interface MiButtonProps {
    text: string;
    icon: JSX.Element | string;
    disable?: boolean;
    loading?: boolean;
}

export const MiButton = ({text, icon, disable= false }: MiButtonProps) => {
    const handleClick = () => {
        console.log("Se hizo click en el botón del componente");
    };

    return (
        <button
            onClick={handleClick}
            className={`components_button ${ disable ? "components_button-disable" : ""}`}
            disabled={disable}
        >
            <div>{text}</div>
            <div>{icon}</div>
        </button>
    )
}