//o que são vetores ou array
let array = ['string', 1, true]
console.log(array);

//pode guardar vários tipos de dados
let array2 = ['karol', 1, true, ["teste1"], ['teste2'], ['teste3']];
console.log(array2[0])

//forEach
array2.forEach(function(item,index){console.log(item,index)})

//adiciona novo item no final do array
/*array2.push('novo item')
console.log(array2)*/

//remove o ultimo item
/*array2.pop
console.log(array2)*/

//remove item no inicio do array
array2.shift()
console.log(array2)
 
//objetos
let casa = {
  quadra: 206,
  conjunto: 11,
  casa: 16,
  estado: {
    estado: 'df',
    cidade: 'Recanto das Emas'
  } 
}
console.log(casa.estado)

//desestruturação do objeto
var endereco = casa.quadra;
console.log(endereco)

var local = casa.casa;
console.log(local)

//ou
var {estado} = casa;
console.log(estado)