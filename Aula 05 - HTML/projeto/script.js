//atividade 1 

const p1 = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve('accepted 01');
    }, 3000);
  })
}


const p2 = () =>{
  return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('accepted 02');
  }, 2500);
  })
}


const p3 = () =>{
  return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject('rejected 01');
    }, 2000);
  })
}

//atividade 2
async function func(){
  try {
      const result = await Promise.all([p1(), p2(), p3()]);
      //o resultado vai ser o reject mas é só substituir que aparece todos
      console.log(result);
    }catch (error){
      console.log(error);
  }
}
func();

//atividade 3
async function func1(){
    try {
        const result = await Promise.all([p1(), p2()]);
        console.log(result);
      }catch (error){
        console.log(error);
    }finally{
        console.log('final da execução')
    }
  }
  func1();