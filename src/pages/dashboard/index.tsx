import { CircleCheck, CircleX } from "lucide-react";
import { useState } from "react";
import { product, product1, product2 } from "../interfaces/interfaces";
import React from "react";

export default function Home() {

    const [state, setState] = useState(false);

    const handlelick = () => {
        setState(true)
    }

    const products: product[] = [
        product1,
        product2
    ]

    console.log(state)

    return (
        <main className="main-container">
            <h1 className="text-4xl font-bold">HELLO WORLD!! ✨</h1>
            <h2 className="text-2xl text-blue-200">
                Mi primer ¡Hola Mundo! desde Next.js + TypeScript! 🤍
            </h2>
            <button onClick={handlelick} className="bg-amber-50 miButton">Show products</button>
            <div>
                {state && (
                    <ul className="list">
                        {products?.map((product) => (
                            <li className="list-item" key={product.name}>
                                <div>Nombre del producto: {product.name}</div>
                                <div>Brand: {product.brand}</div>
                                <div>Price: {product.price} {product.currency}</div>
                                <div className="list-isActive">
                                    Availability: {product.isActive
                                        ? <CircleCheck className="text-emerald-400" />
                                        : <CircleX className="text-rose-700" />}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}