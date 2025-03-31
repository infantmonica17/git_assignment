
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  

    this.sayHello = function() {
      console.log('Hello, ' + this.firstName + ' ' + this.lastName + '!');
    };
  }
  
  
  var person1 = new Person('Infant', 'Monica', 28);
  var person2 = new Person('David', 'Stephen', 30);
  
  
  console.log(person1.firstName); 
  person2.sayHello(); 
    person1.sayHello();