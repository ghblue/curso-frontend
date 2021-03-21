//exercicio 1
function vet(...rest){
  result = rest;
  console.log('deu')
  console.log(...result)
}

const obj1 = {
  name: 'Gabriel'
}

const obj2 = {
  idade: '22'
}


//exercicio 2
function desc({name} = obj1){
  return name;
}
resultt = desc();
console.log(resultt)

//exercicio 3
function conc(obj1, obj2){
  const newObj = {
    ...obj1,
    ...obj2
  }
  return newObj;
}
const result = conc(obj1, obj2);
console.log(result)

const arr1 = [1,3,5,7,9]
const arr2 = [0,2,4,6,8]

//exercicio 4
function Rarray(){
  const newArr = [...arr1, ...arr2]
  return newArr;
}
const resultArr = Rarray(arr1, arr2);
console.log(resultArr.sort())
