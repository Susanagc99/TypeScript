import { toast } from "react-toastify";

export const sumar = (prop1: number, prop2: number) => {
    return prop1 + prop2;
};

export const multiplicar = (prop1: number, prop2: number) => {
    return prop1 * prop2;
};

// otra manera de hacerlo:

// const sumar = (prop1:number, prop2:number) => {
//     return prop1 + prop2
// }

// const multiplicar = (prop1:number, prop2:number) => {
//     return prop1 * prop2
// }

// export {
//     sumar,
//     multiplicar
// }

export const users = [
    { name: "david", password: "holi123" },
    { name: "dani", password: "zorris123" },
    { name: "juana", password: "abc321" },
];


export const notifications = (text: string, type: "success"|"error"|"warn") => {
    if (type === "success") {
        toast.success(text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    if (type === "error") {
        toast.error(text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    if (type === "warn") {
        toast.warn(text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


};
