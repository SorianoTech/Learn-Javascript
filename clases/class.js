//Definimos la clase dog identificada por el nombre, con variables internas nombre y el número de entrada
class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  //llamamos a un get que nos devuelve el nombre y el numero 
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  //llamamos a la funcion para incrementar el valor de entrada
    incrementBehavior() {
      this._behavior ++;
    }
  }
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console