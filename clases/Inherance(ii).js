/**
 * Creamos una clase que comparte las propiedadeds de name y remainingVacationDays y un metodo .takeVacationDays()
 *  Nurse y Doctor
 *  Nurse ->
 *   * constructor: _certifications
 *   * Método:.addCertification()
 *  Doctor -> 
 *   * constructor: _insurance
 *   * Método: .takeVacationDays()
 * 
 * Para añadir subclases utilizamos extends y super
 * Extends permite utilizar el metodo de la clase dentro de la subclase
 * 
 */

class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays  = 20;
    }
  
    get name() {
      return this._name;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }   
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
//cuando el contrsutctor es llamado se le pasa el argumento name del constructor HospitalEmployee
//Simpre hay que llamar a la clave super antes de poder utulizar this.
class Nurse extends HospitalEmployee {
  constructor(name,certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications;
   }
//Añadimos un metodo para meter dentro de la array las certificaciones
  addCertification(newCertification) {
   this._certifications.push(newCertification);
  }
}

//Cremos una nueva variable en la que introducimos los datos utilizando la información de la clase que hemos creado
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk.name);
//llamaos a takeVacationsDays(funcion que hereda del padre)
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
//llamamos a la variable para introducir el campo Genetics 
nurseOlynyk.addCertification('Genetics');
//mostramos la array
console.log(nurseOlynyk.certifications);