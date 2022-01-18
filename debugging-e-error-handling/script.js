//Crie uma função que recebe um array e um número
function validaArray(arr,num){
try{
    //Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros');
  
    //Se o array não for do tipo 'object', lance um erro do tipo TypeError
    if(typeof arr !== 'object')throw new TypeError ('O array precisa ser do tipo object')
    if(typeof num !== 'number')throw new TypeError ('Num precisa ser do tipo number')
  
    //Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    if(arr.length !== num) throw new RangeError('Tamanho inválido');

    return arr//array válido
}
  catch(e){
    //Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
    if(e instanceof ReferenceError){
      console.log('Este erro é um Reference Error')
      console.log(e.message)
    } else if(e instanceof TypeError){
      console.log('Este erro é um TypeError')
      console.log(e.message) 
    } else if(e instanceof RangeError){
      console.log('Este erro é um RangerError')
      console.log(e.message) 
    }else{
      console.log('Tipo de erro não esperado:' + e)
    }
  }
}
console.log(validaArray('e','e'));