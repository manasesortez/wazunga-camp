//crearemos muchos objetos personas
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

/**
 * El método filter() crea un nuevo array con todos los elementos que cumplan la condición 
 * implementada por la función dada.
 * 
 * esto quiere decir que casi siempre recibe una funcion que se le a dado los terminos anteriormente
 * para filtar determinado tipo de datos, como veremos a continuacion:
 */

//FILTRACION DE ARRAYS
const esAlta = ({ altura }) => {
    return altura >= 1.8;
}

var personas = [sacha, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);

console.log(`Las personas altas son:`);
console.log(`\n `);
console.log(personasAltas);
console.log(`\n `);


//personas bajas
const esBaja = ({ altura }) => {
    return altura <= 1.7;
}

var personasBajas = personas.filter(esBaja);

console.log(`Las personas Bajas son:`);
console.log(`\n `);
console.log(personasBajas);
console.log(`\n `);

/**
 * El método map() crea un nuevo array con los resultados de la llamada a la función 
 * indicada aplicados a cada uno de sus elementos.
 * 
 * lo que podemos ver que el metodo map() modifica un deteminado valor de un objeto o variable que
 * ah sido especificada para modificar dicha informacion ejemplo a continuacion que pondremos todas
 * las personas que tienen una altura en metros, pasarla a cm
 */
//TEMA MAP
// persona.altura = persona.altura * 100
const pasarAlturaACms = (persona) => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasCms = personas.map(pasarAlturaACms)

console.log("La altura en centimetro es: ");
console.log(`\n `);
console.log(personasCms);
console.log(`\n `);

/**
 *El método reduce() ejecuta una función reductora sobre cada elemento de un array, 
 devolviendo como resultado un único valor.
 */

const array1 = [1, 2, 3, 4];
const reducers = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducers));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducers, 5));
// expected output: 15


//funcion reducer
const reducer = (acumulador, { cantidadDeLibros }) => {
    return acumulador + cantidadDeLibros;
}
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)
console.log(`\n `);

