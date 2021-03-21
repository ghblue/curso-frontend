const colaboradores = [
  {
      name: 'Juca',
      idade: 25,
      cargo: 'front-end'
  },
  {
      name: 'Márcia',
      idade: 23,
      cargo: 'back-end'
  },
  {
      name: 'Vitória',
      idade: 28,
      cargo: 'designer'
  },
  {
      name: 'Fernando',
      idade: 19,
      cargo: 'estagiario'
  },
  {
      name: 'Fabiane',
      idade: 25,
      cargo: 'back-end'
  },
  {
      name: 'Jéssica',
      idade: 23,
      cargo: 'front-end'
  },
]

const installments = [
  {
    installment_number: 1,
    value: 123.45,
    status: 'Pago'
  },
  {
    installment_number: 2,
    value: 139.88,
    status: 'Pago'
  },
  {
    installment_number: 3,
    value: 123.45,
    status: 'Pago'
  },
  {
    installment_number: 4,
    value: 182.37,
    status: 'Aberto'
  },
  {
    installment_number: 5,
    value: 133.93,
    status: 'Aberto'
  }
]

//exercicio a
const result = installments.reduce((acc, inst) =>{
  return acc + inst.value
},0) 
//exibindo valor arredondado 
console.log(parseFloat(result.toFixed(2)))

//exercicio b
const result1 = installments.reduce((acc, inst) =>{
function increment(){
  if(inst.status === 'Aberto'){
   return{
    total_paid: acc.total_paid,
    total_open: acc.total_open + inst.value
    }
  }else{
    return{
    total_paid: acc.total_paid + inst.value,
    total_open: acc.total_open 
    }
  }
} 
return increment();
},{total_paid: 0, total_open: 0}) 
//exibindo valor arredondado
console.log(result1)

//exercicio c 
const result2 = installments.slice().sort((a,b) => b.value - a.value)
//sem as chaves da arrow function pois o return está implicito 
console.log(result2)

//exercício d
const result_d = installments.slice().sort((a,b) => a.value - b.value || b.installment_number - a.installment_number
)
//sem as chaves da arrow function pois o return está implicito 
console.log(result_d)

