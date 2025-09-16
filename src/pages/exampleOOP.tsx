export default function Home() {
    class Coder {
        name: string;
        age: number;
        email: string;

        constructor(name: string, age: number, email: string) {
            this.name = name;
            this.age = age;
            this.email = email;
        }

        saludar() {
            return `Hola, soy ${this.name}`;
        }
    }

    class Estudiante extends Coder {
        curso:string;
        universidad: string;

        constructor(
            name: string,
            age: number,
            email: string,
            curso: string,
            universidad: string
        ) {
            super(name, age, email);
            this.curso = curso;
            this.universidad = universidad;
        }

        showCurso(){
            return `El coder y estudiante ${this.name} está matriculado en ${this.curso} `
        }
    }

    const coder1 = new Coder("David", 20, "david@email.com");
    console.log(coder1.saludar());
    console.log(coder1.email);


    const estudiante1 = new Estudiante("Roxana",22,"rox@email.com","TS","Riwi");
    console.log(estudiante1.name)
    console.log(estudiante1.showCurso())


    return <div>Hi, look the console</div>;
}