/**
 * Constructor: construyen elementos dentro de una clase 
 * Instances: Es un objeto que contiene la propiedad de nombres y metodos de una clase pero con un unico valor de propiedad
 * Methods: Getter
 * El guión bajo significa que la propuedad no debe ser accesible directamente.
 *  */

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
	get name() {
  	return this._name;
	}
  get department() {
  	return this._department;
	}
  get remainingVacationDays() {
  	return this._remainingVacationDays;
	}
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

/**definimos una variable y almacenamos el valor en una instancia de la clase Surgeon
*se debe usar la palabra new para crear una nueva isntancia de la clase, la 
palabra new llama al constructor() y lanza el codigo que tiene dentro y deuvelve una nueva instancia
*/
const surgeonCurry = new Surgeon('Curry','Cardiovascular');
const surgeonDurant = new Surgeon('Durant','Orthopedics');
console.log(surgeonCurry.name);
console.log(surgeonCurry.department);
//imprimimos el valor de la instancia creada
console.log(surgeonCurry.name);
//llamamos a la funcion e imprimimos el valor de remainingVacations 
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);