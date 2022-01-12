var currentNumberWrapper = document.getElementById('currentNumber');//elemento span completo
var currentNumber = 0;

function increment(){//função de incrementar quando o botão de + for clicado
  currentNumber= currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){//função de incrementar quando o botão de + for clicado
  currentNumber= currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
