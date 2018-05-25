let person = {
    name: 'Sergio',
    age: 29,
    weekendAlarm: 'No alarms needed',
    weekAlarm: 'Alarm set to 7AM',
    //aadimos una funcion dentro del objeto
    sayGoodbye() {
      return 'Goodbye!';
    },
    //llamamos al objeto con this
    sayHello() {
        return `Hello, my name is ${this.name}`
    }
  };
  
  let friend = {
    name: 'Pepe'
  }; 
  //añadimos al objeto friend la funcion de sayHello de person
  friend.sayHello = person.sayHello;
  //de esta manera me imprime el nombre de pepe en vez del mio por que en el otro objeto estamos usando this
  console.log(friend.sayHello());
  
  person.hobbies = ['Basketball', 'Coaching'];
  person.hobbies = ['Basketball'];
  console.log(person.hobbies);
  
  
  console.log(person['name']);
  console.log(person['age']);
  
  let day = 'Tuesday';
  let alarm;
  
  if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
  } else {
    alarm = 'weekAlarm';
  }
  
  console.log(person[alarm]);