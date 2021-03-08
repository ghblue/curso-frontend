const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  }

  //exercicio 1 [a-c]
  console.log(user.nome);
  console.log(user.endereco.rua);
  console.log(user.projetos[1]);


  //exercicio 2 [a-c]
  console.log(user['nome']);
  console.log(user['endereco']['rua']);
  console.log(user['projetos'][1]);

  //exercicio 2 [d]
  const aux = "endereco";
  const aux2 = "numero";
  console.log(user[aux][aux2]);