const subtrai = function(a, b){
    return console.log(a-b);
} 

const testaZero = a => {
    if(a === 0){
        console.log("é zero");
    }else{
        console.log(a, "não é igual a zero");
    }
}

function testaSinal(a, b){
    if(subtrai(a, b) === 0){
        return console.log("É zero.");
    }else if(((a > 0) && (b > 0)) || (a < 0 && b < 0) ){
        return console.log("Subtração entre números de mesmo sinal.");
    }else{
        return console.log("Subtração entra números de sinais diferentes");
    }
}