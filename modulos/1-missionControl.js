/*Definimos una variables que importe el fichero
* puede tener cualquier nombre 
* require es una fucion que permite pasar el directorio
* de un módulo.
*/
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}
//Llamamos a la función.
displayAirplane();