
//Creamos una variable availableAirplanes con dos objetos, que tienen cada uno sus propiedades
export let availableAirplanes = [
  {name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants','engineers','medicalAssistance','sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300},
  {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200}
];

//Definimos un objeto dentro de la variable, con varias propiedades 
  export let flightRequirements = {
    requiredStaff : 4,
    requiredSpeedRange: 700
  };
  //definimos una funciona que requiera las variables de los objetos creados
  //creamos la lógica para comprobar si la logitud de una
  //de las variables es mayor que la otra de esta forma
  //podemos comprobar si hay suficiente staff
 export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
      return true;
    } else {
      return false;
    }
  };
/*1. Definimos una nueva funcion que recibe 3 parámetros
*2. Dentro creamos una variable para calcular la diferencia entre la velocidad max y la min
3. Definimos la logica para saber si el rango entra dentro de lo que es pasado a la funcion
*/
export function meetsSpeedRangeRequirements(maxSpeed, minSpeed,requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else{ 
    return false;
  }
};
 
//Finalmente añadimos la palabra export antes de cada variable y funcion para exportarlas