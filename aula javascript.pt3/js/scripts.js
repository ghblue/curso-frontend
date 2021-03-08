const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]
//exercício 1
students.forEach(elem => {
    console.log(elem.name);
});

//exercício 2
students.forEach(elem => {
  if(elem.age >= 20){
    console.log(elem);
  }
});

//exercício 3
const newArray = [];

students.forEach(elem => {
    if(elem.scholarship){
      newArray.push(elem);
    }
});

console.log(newArray);