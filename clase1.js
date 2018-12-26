// console permite realizar una impresión
//console.log('Hola Mundo JS!');

// para declarar una variable se usa var
// se pueden definir n variables en una sola línea
var nombre = 'Cristian', apellido = 'Basto';

// para imprimir algo en mayúsculas se llama método toUpperCase()
var nombreMayusculas = nombre.toUpperCase();
// para imprimr algo en minúsculas se llama al método toLowerCase()
var apellidoMinusculas = apellido.toLowerCase();

// para saber cual es el primer caracter de un string
var primeraLetraDelNombre = nombre.charAt(0);

// para saber la longitud de un string
var cantidadDeCaracteres = nombre.length;

// otra manera de concatenar string
var nombreCompleto = `${nombre} ${apellido}`;

// como acceder a un sub string dentro de otro string
var str = nombre.substr(1,2);