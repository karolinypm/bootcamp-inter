//estrutura de decisão
var jogador1 = 0;
var jogador2 = 0;
var placar;
/*if(jogador1 != -1){
  if(jogador1>0){
    console.log('jogador 1 marcou ponto');
  } else if (jogador2>0){
    console.log('jogador 2 marcou ponto');
  }
  else{
    console.log('Ninguém marcou ponto');
  }
}*/

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('jogadores invalidos')


  if(jogador1>0 && jogador2 ==0){
    console.log('jogador 1 marcou ponto');
    placar = jogador1 > jogador2
  } else if (jogador2>0 && jogador1 ==0){
    console.log('jogador 2 marcou ponto');
    placar = jogador2 > jogador1
  }
  else{
    console.log('Ninguém marcou ponto');
  }

  //switch/case
  switch(placar){
    case placar = jogador1 > jogador2:
      console.log('jogador 1 ganhou');
      break;
      case placar = jogador2 > jogador1:
      console.log('jogador 1 ganhou');
      break;
      default:
      console.log('ninguém');
  }

  //estruturas de repetição
  let array = [10,20,30,40,50];
  let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

  for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
  }

  //for in
  /*for(let i in array){
    console.log(i)
  }
  for(i in object){
    console.log(i);
  }*/

  //for of
  for(i of array){
    console.log(i);
  }
  //for of não funciona com com objetos pois as propriedades variam, mas... 
  for(i of object.propriedade1){
    console.log(i)
  }

  //while - enquanto, determinada condição for verdadeira a verificação é feita antes da execução
  var a = 0;
  while(a < 10){
    a++;
    console.log(a);
  }

  //do whilw - até que, uma condição seja falsa e a verificação é feita depois da execução
  do{
    a++;
    console.log(a);
  } while(a<10)