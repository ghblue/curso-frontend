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


//ex1_b resolvido e simplificado pelo érico
const ex1_b = colaboradores.reduce(  (acc, colab) => Object.assign(acc,
  {[colab.cargo]: acc[colab.cargo] ?
    acc[colab.cargo] + 1 : 1}),
{} )
console.log(ex1_b)


//exercicio 2a
const ex2_a = colaboradores.slice().sort((a,b) =>{
return a.idade - b.idade
})
console.log(ex2_a)

//exercicio 2b
const ex2_b = colaboradores.slice().sort((a,b) =>{
return b.idade - a.idade
})
console.log(ex2_b)

//exercicio 2c
const ex2_c = colaboradores.slice().sort((a,b) =>{ 
let pesos = {
  estagiario: 1,
  'front-end': 2,
  'back-end': 3,
  designer: 4
  } 
return pesos[a.cargo] - pesos[b.cargo]
})
console.log(ex2_c)

//exercicio 2d
const ex2_d = colaboradores.slice().sort((a,b) =>{ 
let pesos = {
  estagiario: 1,
  'front-end': 2,
  'back-end': 3,
   designer: 4
} 
return ((a.idade - b.idade) === 0) ?
     (pesos[a.cargo] - pesos[b.cargo]):
     (a.idade - b.idade)
})
console.log(ex2_d)