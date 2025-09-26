import { JSX } from "react"
import React from "react";

interface MiButtonProps {
    text: string;
    icon: JSX.Element | string;
    disable?: boolean;
    loading?: boolean;
    click?: () => void;
}

export const MiButton = ({
    text, 
    icon, 
    disable= false,
    loading= false,
    click,
}: MiButtonProps) => {
    return (
        <button
            onClick={click}
            className={`components_button 
                ${ disable ? "components_button-disable" : ""}`}
            disabled={disable || loading}
        >
            <div>{loading ? "Cargando..." : text}</div>
            <div>{icon}</div>
        </button>
    )
}