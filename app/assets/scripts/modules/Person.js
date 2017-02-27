class Person {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  greet(){
    console.log("name: "+this.name+"; color: "+this.color);
  }
}

// module.exports = Person;
export default Person;
