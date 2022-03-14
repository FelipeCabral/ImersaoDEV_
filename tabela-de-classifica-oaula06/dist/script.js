var rafa = { nome: "Rafa", vitorias: 1, empates: 2, derrotas: 3, pontos: 23 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 2, derrotas: 3, pontos: 23 };

//console.log(rafa);
//console.log(paulo);
console.log(rafa);
calcularPontos(rafa);

function calcularPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}
rafa.pontos = calcularPontos(rafa);
rafa.pontos = calcularPontos(paulo);

var jogadores = [rafa, paulo];

console.log[jogadores];
//console.log(rafa);

function exibeJogadoresNaTabela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i] + "</td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><td><button onClick='adicionarVitoria()''>Vitória</button></td>";
    elemento +=
      "<td><td><button onClick='adicionarEmpate()''>Empate</button></td>";
    elemento +=
      "<td><td><button onClick='adicionarDerrota()'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

//exibeJogadoresNaTela(jogadores);

function adicionaVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}