var listaFilmes = [
  "https://images-na.ssl-images-amazon.com/images/I/91x4Z0C7L8L.jpg",
  "https://img.elo7.com.br/product/zoom/2AAE7AA/big-poster-filme-star-wars-a-ascensao-skywalker-01-90x60-cm-poster.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/e/eb/Cobra_%281986%29_Poster.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
