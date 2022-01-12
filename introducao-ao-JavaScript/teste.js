//Este é um comentário de liha em JS
/* Este comentário é de várias linhas de sua abertura até seu fechamento */

//Dar nomes que façam sentido à variável
var preco = 2;
var desconto = 0.2;
const PRECO2 = 3; //constantes não alteram e como boa prática são escritas em letra maíscula para ser diferenciada.
preco = preco - desconto;

//FUNÇÕES
function soma(a,b){//parenteses servem para declarar parâmetros
  return a + b;//return é usado quando vc precisa retornar o resultado da função e usar como parâmentro em outra função
  //utilizá-se muito o console.log para debugar
}
//para que a função seja executada
soma(1,2);

//CONSOLE
console.log("Hello");
/*Output do console no terminal com node.js
1 - Abrir o terminal do Vs
2- Navegar até a pasta onde está seu arquivo .js 
3- Rodar o arquivo: node teste.js */