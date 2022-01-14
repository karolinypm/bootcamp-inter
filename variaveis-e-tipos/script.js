function verificaPalindro(string){
  if(!string) return "string inexisten";//se não existir string, se string for false, ela vai retornar e a função acaba, não é necessário else

  //split para separar todas as letras em array
  //reverse para inverter as letras e join para unir comparado a string que foi recebida
  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindro('ovo'));
console.log(verificaPalindro('gato'));

//solução 2
function verificaPalindro2 (string2){
  if (!string2) return "String inexistente"

  for(let i = 0; i < string2.length /2; i++){

  }
}
