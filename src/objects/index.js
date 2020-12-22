/**
 * Que son los objetos: 
 * 
 * En JavaScript, un objeto es un entidad independiente con propiedades y tipos. 
 * Compáralo con una taza, 
 * por ejemplo. Una taza es un objeto con propiedades. 
 * Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. 
 * Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus 
 * características.
 * 
 * ademas de que los objetos pueden ser modificados con diferentes funciones como veremos
 * en este apartados y en otros
 */

//Clase creacion de objetos
var Manases = {
    nombre: "Alberto Manases",
    apellido: "Turcios Ortez",
    edad: 20
}

var Jose = {
    nombre: "Jose Manuel",
    apellido: "Lopez Martinez",
    edad: 21
}


function imprimirEdad(name, year) {
    console.log(`${name} tiene, ${year} años`);
}


imprimirEdad(Manases.nombre, Manases.edad);

//others funtcion //acceder a los atributos 
function imprimirMayuscula(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase());
}

imprimirMayuscula(Manases);
imprimirMayuscula(Jose);


//imprimirMayuscula({ nombre: "Pablo Israel" });
function imprimirNombreyApellido(nombre, apellido) {
    console.log(`\nHola mi nombre es ${nombre}, y tengo ${apellido} años. `);
}

imprimirNombreyApellido(Manases.nombre, Manases.edad);
imprimirNombreyApellido(Jose.nombre, Jose.edad);



//parametros por valor y por equivalencia 
function cumpleaños(personas) {
    return {
        ...personas,
        edad: personas.edad + 1
    }
}
var manasesViejo = cumpleaños(Manases);

console.log(manasesViejo)