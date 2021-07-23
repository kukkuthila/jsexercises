// question 5 start
const person = {
  firstName: "Nimal",
  lastName: "Raj",
  age: "15",
  city: "Kandy",
//return
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
// Display output
document.write ("My name is " + person.fullName() +". " + "I'm " + person.age + " years old" +". " + "I live in "+ person.city + ".");
// line break
document.write("<br>" + "<br>");
