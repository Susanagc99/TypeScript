"use client";

import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import { notifications } from '../../helpers/utils';
import React from 'react';

const Dashboard = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        if (count < 0) {
            notifications("número negativo", "error")
        }
        if (count > 0) {
            notifications("número positivo", "success")
        }
    }, [count])

    const handleCountPlus = () => {


        if (count < 15) {
            setCount(count + 1)
        } else {
            notifications("no se puede más", "error")
        }
    }


    return (
        <div className='counter-container'>
            <h2 className='mb-15 mt-15'>{count}</h2>
            <button onClick={() => { setCount(count - 1) }} className="button">-1</button>
            <button onClick={() => { setCount(0) }} className="button">reset</button>
            <button onClick={handleCountPlus} className="button">+1</button>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;