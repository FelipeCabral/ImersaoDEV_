var numeroSecreto = parseInt(Math.random(10) * 11);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  var elementoResultado = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
    //console.log("Acertou");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
    //console.log("Você deve digitar um número de 0 a 10.");
  } else {
    elementoResultado.innerHTML = "Você errou!";
    //elementoResultado.innerHTML =
    //"Você erro! O número secreto era: " + numeroSecreto;
    //console.log("Errou");
  }
}

//console.log(numeroSecreto);
