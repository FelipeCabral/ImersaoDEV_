var carta1 = {  
  nome: "Bulbasauro", 
  atributos: {    
    ataque: 7,
    defesa: 8,
    magia: 6  
}  
  
};

var carta2 = {  
  nome: "Darth Vader", 
  atributos: {    
    ataque: 9,
    defesa: 8,
    magia: 2  
}  
  
};

var carta3 = {  
  nome: "Shiryu de Dragão", 
  atributos: {    
    ataque: 5,
    defesa: 9,
    magia: 10  
}  
  
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;


function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random * 3);
  //cartaMaquina = (cartas[0]);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);
  
  var numeroCartaJogador = parseInt(Math.random * 3);
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);
  
}


//console.log(cartas);
//console.log(carta1.atributos.ataque);