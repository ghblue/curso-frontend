let string
const p1 = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve('accepted 01');
    }, 3000);
  })
}

let string2
const p2 = () =>{
  return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('accepted 02');
  }, 2500);
  })
}

let string3
const p3 = () =>{
  return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject('rejected 01');
    }, 2000);
  })
}

async function funct(){
  try {
      const result = await Promise.all([p1(), p2(), p3()]);
      console.log(result);
    }catch (error){
      console.log(error);
  }
}
funct();


