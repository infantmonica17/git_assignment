const Manager = {
    name: "Asher",
    age: 27,
    job: "Software Engineer",
  };
  const Employee = {
    name: "Vijay",
    age: 21,
    job: "Software Engineer assistant",
  };
  
  function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  
  Manager.sayHi = sayHi;
  Employee.sayHi = sayHi;
  
  Manager.sayHi(); 
  Employee.sayHi(); 
  