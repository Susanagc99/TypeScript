import React from "react";

export default function Home() {

    const arrayNum = [28,5,111,506,62];
    const arrayStr = ["B","A","3","s","Zzz"];
    const arrayBln = [true,false];

    // devolver primer elemento del array
    const returnFirstElement = <T,> (array:T[]):T => {
        return array[0]
    }
    const resul = returnFirstElement<number>(arrayNum);
    console.log(resul)


    // devolver el último elemento del array
    const returnLastElement = <T,> (array:T[]):T => {
        return array[array.length -1];
    }
    const resul2 = returnLastElement<string>(arrayStr);
    console.log(resul2);


    // devolver cada uno de los elementos del array
    const returnBlnElements = <T,> (array:T[]):void => {
        array.forEach((element)=> console.log(element))
    }
    returnBlnElements(arrayBln);


    // devolver el array pero viceversa
    const reverseArray = <T,> (array:T[]):T[] => {
        return [...array].reverse()
    }
    const resul4 = reverseArray<number>(arrayNum);
    console.log(resul4)


    


    // function identify<T>(parametro: T): T {
    //     return parametro
    // }

    // const result = identify<number>(5)
    // const result2 = identify<string>("Hola")
    // const result3 = identify<boolean>(true)

    // console.log(result)
    // console.log(result2)
    // console.log(result3)

    

    return (
        <div>genéricos</div>
    );
}