import React, { useState } from 'react'
import { MiButton } from '../../../components/button/Button';
import { CgArrowRightR } from "react-icons/cg";
import { ToastContainer } from 'react-toastify';

export default function Home () {
    const [loader, setLoader] = useState(false);

    const handleClick = () => {
        setLoader(true);

        setTimeout(() => {
            setLoader(false);
        }, 3000);
    };
    
    return (
        <div>
            <div>
                <div>Hola mundo</div>
                <div className="flex gap-5">
                    <button onClick={handleClick}>Llamar al back</button>

                    <MiButton text={"Guardar"} icon={"S"} />
                    <MiButton text={"Cancelar"} icon={"X"} />
                    <MiButton text={"Siguiente"} icon={<CgArrowRightR />} loading={loader}/>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}
