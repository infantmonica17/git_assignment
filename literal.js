var person = {
    firstName: 'David',
    lastName: 'Stephen',
    age: 30,
    sayHello: function() {
      console.log('Hello, ' + this.firstName + ' ' + this.lastName + '!');
    }
  };
  
  console.log(person.firstName); 
  
  
  person.sayHello(); 