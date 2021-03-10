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

//exercicio 1
const desafio1 = colaboradores.map( (colab, indice)=>{
    return colab.name
} )
    console.log(desafio1)

//exercicio 2
const desafio2 = colaboradores.filter(colab =>{
  return colab.cargo === 'front-end'
})
console.log(desafio2)

//exercicio 3
const desafio3 = colaboradores.find(colab =>{
  return colab.idade > 23
})
console.log(desafio3)

//exercicio 4
const desafio4 = colaboradores.filter(colab =>{
  return colab.idade > 18
})
console.log(desafio4)

//exercicio 5
const desafio5 = colaboradores.some(colab =>{
  return colab.cargo === 'estagiario'                               
})
console.log(desafio5)