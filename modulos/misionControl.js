import Airplane from './airplane';
//Definimos la funcion
//Recoremo la array y ejecutamos otra funcion por cada elemento dentro del objeto availableAirplanes.
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
displayFuelCapacity();