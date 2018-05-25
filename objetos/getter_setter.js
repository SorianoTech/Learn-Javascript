
  let person = {
    _name: 'Lu Xun',
    _age: 137,
    //definimos el setter para chequear si el dato que se quiere cambiar es valido
    set age(ageIn) {
        //compruebo que si el usuario esta introduciendo una información válida, preguntado por el tipo de dato 
      if (typeof ageIn === 'number') {
        this._age = ageIn;
      }
      else {
        console.log('Invalid input');
        return 'Invalid input';
      }
    }
  
  };

//Getters and Setters II