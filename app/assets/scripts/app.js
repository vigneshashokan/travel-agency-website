// var Person = require("./modules/Person");
import Person from "./modules/Person";

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes to US.");
  }
}
var john = new Person("john doe", "red");
john.greet();

var jane = new Adult("jane smith", "orange");
jane.greet();

jane.payTaxes();
