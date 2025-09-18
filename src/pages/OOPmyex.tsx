import { useState } from "react";
import React from "react";

export default function Home() {


    const [state, setState] = useState(false);

    const handlelick = () => {
        setState(true)
    }

    class instrument {
        name: string;
        color: string;
        quantity: number;
        price: number;
        currency: "COP" | "USD";

        constructor(
            name: string,
            color: string,
            quantity: number,
            price: number,
            currency: "COP" | "USD"
        ) {
            this.name = name;
            this.color = color;
            this.quantity = quantity;
            this.price = price;
            this.currency = currency;
        }

        tocar() {
            return `El instrumento "${this.name}" está sonando`;
        }

        romper() {
            return `oh noo! Las ${this.quantity} unidades de ${this.name} se rompieron`;
        }
    }

    class strings extends instrument {
        numberStrings:number;
        brand:string;
    

        constructor(
            name: string,
            color: string,
            quantity: number,
            price: number,
            currency: "COP" | "USD",
            numberStrings:number,
            brand:string
        ){
            super(name,color,quantity,price,currency)
            this.numberStrings = numberStrings;
            this.brand = brand;
        }

        showInstrumentstrings() {
            return `El ${this.name} de color ${this.color} tiene ${this.numberStrings} cuerdas`
        }
    }

    const instrument1 = new instrument("guitarra", "negro", 50, 1500, "USD");
    const instrument2 = new instrument("ukelele", "blanco", 28, 90000, "COP");

    console.log(instrument1.tocar());
    console.log(
        `La ${instrument1.name} tiene un valor de ${instrument1.price} ${instrument1.currency}`
    );
    console.log(
        `El ${instrument2.name} este tiene un valor de ${instrument2.price} ${instrument2.currency}`
    );
    console.log(instrument2.romper());


    const strings1 = new strings("violin", "blanco", 13, 500, "USD", 4, "felix")

    console.log(strings1.name)
    console.log(strings1.showInstrumentstrings())

    return (
        <main>
            <div>{instrument1.tocar()}</div>
            <div>{instrument1.romper()}</div>
            <button onClick={handlelick} className="bg-amber-50 miButton">Instruments</button>
            <div>
                {state && (
                    <ul className="list">
                        <li className="list-item">
                            <div>Instrumento: {instrument1.name}</div>
                            <div>Color: {instrument1.color}</div>
                            <div>Quantity: {instrument1.quantity}</div>
                        </li>
                    </ul>
                )}
            </div>
        </main>
    );
}

