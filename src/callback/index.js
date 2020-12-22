/**
 * Que es un callback: 
 * 
 * Una función de callback es una función que se pasa a otra función como un argumento, que luego 
 * se invoca dentro de la función externa para completar algún tipo de rutina o acción.
 * 
 * En pocas palabras un callback es una 
 * funcion que ah sido creada especioficamente para recibir otr funcion como parametro
 *
 */

//function of suma
function suma(n1, n2) {
    return n1 + n2;
}

//function of suma
function resta(n1, n2) {
    return n1 - n2;
}

//function of suma
function multiplicacion(n1, n2) {
    return n1 * n2;
}

//function of suma
function division(n1, n2) {
    return n1 / n2;
}

function calculadora(n1, n2, callback) {
    return callback(n1, n2);
}

console.log("El resultado de la operacion es: ", calculadora(2, 2, resta), "\n ");


//example of a callback on JavaScripts
function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        var date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow);
};

date(printDate);