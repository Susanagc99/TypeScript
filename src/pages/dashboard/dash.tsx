
import React, { useState } from 'react'
import { Button, Switch } from '@heroui/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { MyContext } from '../../context/Context';
import { Input } from "@heroui/react";

interface FormData {
    name: string,
    email: string,
    age: number,
}

const Dashboard = () => {
    const router = useRouter();

    const { userLogged, setIsActive, isActive, isSelected, setIsSelected } = useContext(MyContext);


    // Uso del Hook (useState) para manejar el estado del formulario y los errores
    // Estado del formulario en el componente 
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        age: 0,
    });

    // Estado para manejar los errores
    const [errores, setErrores] = useState<string[]>([]);



    console.log(userLogged)

    const handleClick = () => {
        console.log(userLogged)
        setIsActive(!isActive)
        router.back();
    };


    // Actualizar dinámicamente (conversión para age)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'age' ? Number(value) : value,
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const erroresFormulario = validarFormulario();
    
        if (erroresFormulario.length > 0) {
            setErrores(erroresFormulario);
            return;
        }
    
        setErrores([]);
        alert('Formulario enviado correctamente');
    };
    
    // Derivar el mensaje de error por campo (para description)
    const nameError = errores.find(err => err.toLowerCase().includes('nombre'));
    const emailError = errores.find(err => err.toLowerCase().includes('correo'));
    const ageError = errores.find(err => err.toLowerCase().includes('edad'));

    // Valida los datos antes de enviarlos
    const validarFormulario = (): string[] => {
        const errores: string[] = [];

        if (!formData.name) errores.push('El nombre es requerido');
        if (!formData.email.includes('@')) errores.push('El correo debe ser válido');

        //errores age
        if (formData.age <= 18) errores.push('La edad debe ser mayor a 18');

        return errores;
    };



    return (
        <div className='dash-container'>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div>El usuario {userLogged.name} está logueado</div>

            <Switch className="mt-5" color="danger" isSelected={isSelected} onValueChange={setIsSelected}>
                Airplane mode
            </Switch>

            <form onSubmit={handleSubmit} noValidate>
                <div className='form-container mt-15'>

                    <label></label>
                    <Input
                        type="text"
                        name="name"
                        label="Name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        description={nameError || ''}
                    />

                    <label></label>
                    <Input
                        type="number"
                        name="age"
                        label="Age"
                        placeholder="Enter your age"
                        value={String(formData.age)}
                        onChange={handleChange}
                        description={ageError || ''}
                    />

                    <label></label>
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        description={emailError || ''}
                    />

                    <Button className="mt-6" type="submit" variant="bordered">
                        Submit
                    </Button>

                </div>
            </form>

            <Button onPress={handleClick} className="mt-8 bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                regresar
            </Button>



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

