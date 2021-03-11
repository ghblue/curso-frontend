const students = [
  {id: 1, name: 'John Doe', age: 23, scholarship: false},
  {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
  {id: 3, name: 'Kayle', age: 22, scholarship: true}
]
//map vai ser usado pra quando precisar modificar os elementos do array sem mudar o tamanho
/*const result = students*/

/*
//retorna o primeiro elemento que se encaixa no critério.
const result = students.find(student=>{
return student.scholarship
//é preciso retornar algo que no final será true ou false, pra ele definir se o elemento que está procurando é o atual ou não
});
console.log(result)*/

/*
//basicamente a função some diz se existe pelo menos um elemento que satisfaça a condição, se sim, ela retorna o valor booleano disso
const result = students.some(student=>{
return student.scholarship
})
console.log(result);
*/

/*
// a função every testa se TODOS elementos do array satisfazem a condição no return
const result = students.every(student=>{
  return 
})
console.log(result);
*/

/*
//a função filter filtra os elementos de acordo com o critério descrito no return
const result = students.filter(student=>{
  return student.scholarship
})
console.log(result)
*/

//acc é o acumulador, e é a variavle que dá acesso ao que ja aconteceu na redução, o que eu retornar ficará armazenado no acc, o parametro 0 é o valor atribuido ao acc, e durante a passagem por cada argumento, o acc vai armazenar o return do cara anterior, sempre sobrescrevendo o anterior
/*
const result = students.reduce((acc, student)=>{
  if(student.scholarship){
    return {
  tem_bolsa: acc.tem_bolsa + 1,
  nao_tem_bolsa: acc.nao_tem_bolsa
  }
}else{
    return {
  tem_bolsa: acc.tem_bolsa,
  nao_tem_bolsa: acc.nao_tem_bolsa + 1
  }
} 

},  {
  tem_bolsa: 0,
  nao_tem_bolsa: 0
});
console.log("resposta = ", result)
*/

/*
//algoritmo de ordenação, ele modifica sempre o array original a não ser que seja feita uma cópia
const result = students.slice().sort((a, b)=>{
//return negativo => quando a precede b
//return positivo => quando b precede a
//return zero => quando são numeros iguais
return a.age - b.age
//para fazer decrescente é só inverter os lados b - a
});
console.log(students)
console.log(result)
*/