
import React, { useState } from 'react'
import { Button, Switch } from '@heroui/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { MyContext } from '../../context/Context';

const Dashboard = () => {
    const router = useRouter();

    const { userLogged, setIsActive, isActive, isSelected, setIsSelected} = useContext(MyContext);

    console.log(userLogged)

    const handleClick = () => {
        console.log(userLogged)
        setIsActive(!isActive)
        router.back();
    };

    return (
        <div className='dash-container'>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div>El usuario {userLogged.name} está logueado</div>
            <Button onPress={handleClick} className="mt-7" color="danger">
                regresar
            </Button>

            <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                    Airplane mode
            </Switch>
        </div>
    );
};

export default Dashboard;


// import React, { useState, useEffect } from "react";
// import { getProperties } from "../../services/properties"

// interface propertyProps {
//     _id: string,
//     name: string,
//     value: number,
//     img: string
// }

// interface dataProperties {
//     ok: string,
//     miInfo: propertyProps[]
// }

// export default function Home() {
//     const [dataProperties, setDataProperties] = useState({} as dataProperties);

//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const fechData = async () => {
//             const response = await getProperties();
//             setDataProperties(response);
//         };
//         fechData();
//     }, []);

//     // 0, "", undefinded, null, []

//     console.log(dataProperties.miInfo)


//     return (
//         <main className="main-container">
//             <h1 className="text-4xl font-bold">Dashboard</h1>

//             <div className="flex gap-2">
//                 <button
//                     onClick={() => {
//                         setCount(count + 1);
//                     }}></button>
//             </div>

//             {dataProperties.ok && (
//                 <div className="flex gap-2">
//                     {dataProperties.miInfo.map((property) => (
//                         <div key={property._id}>
//                             <div>{property.name}</div>
//                             <div>{property.value}</div>
//                             <img src={property.img} alt={property.name} />
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </main>
//     );
// }

