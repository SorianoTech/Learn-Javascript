//Getters and Setters II
//Crear un metodo get para devolver la propiedad de la edad e imprimir el nombre y la edad
let person = {
    _name: 'Lu Xun',
    _age: 137,
    
    set age(ageIn) {
      if (typeof ageIn === 'number') {
        this._age = ageIn;
      }
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    },
    //definimos el metodo get age que forma parte del objeto(por eso podemos usar this, que nos imprime el nombre la edad y por último la edad de nuevo)
    get age() {
      console.log(`${this._name} is ${this._age} years old.`);
      return this._age;
    }

  };
