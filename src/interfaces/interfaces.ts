
export interface product {
    name: string;
    brand: string;
    quantity: number;
    price: number;
    currency: 'COP' | 'USD';
    isActive: boolean;
}


interface Address {
    street: string;
    city: string;
    country: string;
    postalCode?: string;
}

interface User {
    name: string;
    cc: number;
    email: string;
    phone: string;
    address: Address;
}


//Products (at least 15)

const product1: product = {
    name: "Laptop",
    brand: "HP",
    quantity: 28,
    price: 2500000,
    currency: "COP",
    isActive: false
}

const product2: product = {
    name: "play station 5",
    brand: "play station",
    quantity: 50,
    price: 800,
    currency: "USD",
    isActive: true
}



const user1: User ={
    name: "Mateo Guerra",
    cc: 1223498523,
    email: "mateito@example.com",
    phone: "3216549870",
    address: {
        street: "",
        city: "",
        country: ""
    }
}

const user2: User = {
    name: "",
    cc: 0,
    email: "",
    phone: "",
    address: {
        street: "",
        city: "",
        country: "",
        postalCode: ""
    }
}

const user3: User = {
    name: "",
    cc: 0,
    email: "",
    phone: "",
    address: {
        street: "",
        city: "",
        country: ""
    }
}


const user4: User = {
    name: "",
    cc: 0,
    email: "",
    phone: "",
    address: {
        street: "",
        city: "",
        country: "",
        postalCode: ""
    }
}

const user5: User = {
    name: "",
    cc: 0,
    email: "",
    phone: "",
    address: {
        street: "",
        city: "",
        country: ""
    }
}


export {
    product1,
    product2,
    user1,
    user2,
    user3,
    user4,
    user5
}