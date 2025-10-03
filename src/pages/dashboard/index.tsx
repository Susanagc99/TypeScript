import React, { useState, useEffect } from "react";
import { getProperties } from "../../services/properties"

interface propertyProps{
    _id:string,
    name:string,
    value:number,
    img:string
}

interface dataProperties{
    ok:string,
    miInfo: propertyProps[]
}

export default function Home() {
    const [dataProperties, setDataProperties] = useState({} as dataProperties);
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fechData = async() => {
            const response = await getProperties();
            setDataProperties(response);
        };
        fechData();
    }, []); 

    // 0, "", undefinded, null, []

    console.log(dataProperties.miInfo)


    return (
        <main className="main-container">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            
            <div className="flex gap-2">
                <button
                onClick={() =>{
                    setCount(count + 1);
                }}></button>
            </div>

            {dataProperties.ok && (
                <div className="flex gap-2">
                    {dataProperties.miInfo.map((property) => (
                       <div key={property._id}>
                            <div>{property.name}</div>
                            <div>{property.value}</div>
                            <img src={property.img} alt={property.name}/>
                       </div> 
                    ))}
                </div>
            )}
        </main>
    );
}

