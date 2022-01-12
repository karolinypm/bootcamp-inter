//tipos primitivos
//bolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numero = 1;
console.log(typeof(numero));

//string
var nome = 'Karol';
console.log(typeof(nome));

//declarando variáveis
var variavel;
console.log(variavel);

let variavel2 = 'Karoliny';
variavel2 = 'Pires'
console.log(variavel2);

//const - somente leitura, valor inicial obrigatório e não pode ser alterado
const constante = 3;
console.log(constante)

//escopo global
var escopoGlobal = 10;
console.log(escopoGlobal);

//escopo local - variáveis dentro de funções não podem ser vistas fora dela
function escopoLocal(){//por convenção utiliza-se let em escopo local
  let escopoLocalInterno = 20;
  console.log(escopoLocalInterno);
}
escopoLocal();//executa a função

