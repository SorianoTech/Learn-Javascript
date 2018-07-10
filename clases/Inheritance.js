/**Herencias
 * Cuando ahy clases que tienen propiedades compartidas o metodos se utiliza la herencia.
 * Se puede crear una herencia padre que las subclases pueden compartir.
 * Creamos un clase llamada Animal. Esta comparte dos propiedades (_name y _behavior) y un metodo (.incrementBehavior())
 * 
 **/
class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
  
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior++;
    }
  }
