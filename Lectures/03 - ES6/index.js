

//!LET Y CONST

const hacerArroz = '2 medidas de agua por 1 medida de arroz';

// hacerArroz = '3 medidas de arroz';

// let hacerSopa = 'pechuga de pollo con 2 tomates';
// hacerSopa = 'el tomate se pudrio asi que... sopa de pollo sera :(';
// console.log(hacerSopa);

// hacerSopa = ['pollito'];
// console.log(hacerSopa);





//!ARROW FUNCTION

// const calcularEdad = function(fechaDeNacimiento) {
//     return 2023 - fechaDeNacimiento;
// }

// const calcularEdad = (fechaDeNacimiento) => 2023 - fechaDeNacimiento;
// console.log(calcularEdad(1987));

//las arrow functions NO GENERAN UN CONTEXTO DE EJECUCION, usan
//el que se les provee al invocarlas





//!CLASS
//las clases se anadieron para crear mas cercania con c++ y otros lenguajes
//antes se creaban los objetos con funciones constructoras

//expresion de clase
const SuperHeroeB = class{};

//declaracion de clase
// class SuperHeroe {
//     constructor(name, identidad, superpoder) {
//         this.name = name;
//         this.identidad = identidad;
//         this.superpoder = superpoder;
//     }

//     imprimir() {
//         console.log(
//             `Este es ${this.identidad}, mejor conocido como ${this.name}, 
//             y su superpoder es: ${this.superpoder}`
//         )
//     }
// };

// let spiderman = new SuperHeroe('Spiderman', 'Peter Parker', 'Aracnido');
// console.log(spiderman);
// spiderman.imprimir();

//!EXTENDS de clases

// class Villano extends SuperHeroe {
//     constructor(name, identidad, superpoder) {
//         super(name, identidad, superpoder)
//         this.soyMalo = true;
//     }
// }

// let rhino = new Villano('Rhino', 'Un senor', 'Fuerza');
// rhino.imprimir();

//!OBJECT LITERALS
//es crear un objeto (instancia) directamente, en vez de usar una clase
//un literal se puede anidar dentro de otro objeto, llamandolo como una
//de sus propiedades






//!TEMPLATE LITERALS (TEMPLATE STRINGS)
// const literal = `hola ${this.nombre}, \n como te va broo \n todo en orden?`;
// console.log(literal);




//!DESTRUCTURING
//es EXTRAER informacion de un array u objeto de manera mas sencilla

//manera tradicional
// let arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

//desctructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

//otros ej
//const [elem1, elem2] = obj.arr;
//const {prop1} = obj;

//tambien le puedo cambiar el nombre a la propiedad que desestructure
// const {prop1: nuevoNombre} = obj;
// console.log(nuevoNombre);


//desestructo el nombre de el objeto que me enviaron y lo uso en la funcion
// function print({nombre: x}) {
//     console.log(x);
// }

// print({nombre:'Gama', edad: 26});

//tambien se puede poner un valor como default en el destructuring
//por si resulta que el valor que tomo del objeto o array es undefined o null





//!SPREAD OPERATOR
//es expandir un array, tomar sus elementos y extraerlos
//genera un array nuevo con los valores (los copia)
// let heroes = ['Martian Manhunter', 'Green Arrow'];
// console.log(heroes);
// console.log(...heroes);

// let masHeroes = ['Batman', 'Superman', 'Spiderman'];
// console.log(heroes, masHeroes);
// console.log([...heroes, ...masHeroes]);

// masHeroes = [...masHeroes, 'Bartolomiau'];
// console.log(masHeroes);


//Spread de un string en sus chars
// let name = 'Gama';
// console.log(...name);

// let letras = [...name];
// console.log(letras);

//el spread tambien sirve con objetos
// let obj = {
//     prop: 'asd',
//     prop2: 3
// }
// let obj2 = {...obj, prop3: 'asdfadsfadsf'};
// console.log(obj);
// console.log(obj2);


//usar un spread operator en una funcion se llama "rest operator",
//y sirve para cuando no sabes cuantos argumentos vas a recibir
// function multiplicarPor(multiplicador, ...numeros) {
//     let result = [];
//     numeros.forEach((numero) => {
//         result.push(multiplicador * numero);
//     });
//     return result;
// };
// console.log(multiplicarPor(2, 3, 4, 3, 4, 5, 6, 6));





//!PROMISES
//con esto JS puede manejar mas facilmente el codjigo asincronico
//que necesita esperar a que ocurra algun otro evento antes de ejecutarse
//timeout es una promesa