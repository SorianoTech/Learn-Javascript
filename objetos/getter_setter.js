/*Getters and Setters I (Captadores y definidores)
_ se utiliza par indicar a los desarrolladores que no debe ser modificada directamente por otro código.
Se recomienda antepone todas las propiedades con un guion bajo y crear definidores (setters) para todos los atributos que queremos acceder mas tarde.
*/  
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


