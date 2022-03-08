function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmRealNumerico = valorEmDolarNumerico * 5;

  //  console.log(valorEmRealNumerico);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmRealNumerico;
  elementoValorConvertido.innerHTML = valorConvertido;
}

//console.log("Passei por aqui");
