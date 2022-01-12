function comparador(){
  let numero1 = Number(prompt('Digite o primeiro número'));
  let numero2 = Number(prompt('Digite o segundo valor'))
  let soma;

  soma = numero1 + numero2;

  if(numero1 == numero2 && soma <10 && soma < 20){
    alert(`Os números ${numero1} e ${numero2} São iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`)} 
    else if(numero1 != numero2 && soma <10 && soma < 20){
    alert(`Os números ${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`)} 
    else if (numero1 == numero2 && soma > 10 && soma > 20){
      alert(`Os números ${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`)}
    else if (numero1 != numero2 && soma > 10 && soma > 20){
      alert(`Os números ${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`)}
    else if (numero1 == numero2 && soma > 10 && soma < 20){
      alert(`Os números ${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`)}
    else {
      alert(`Os números ${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
    }
  }
comparador();