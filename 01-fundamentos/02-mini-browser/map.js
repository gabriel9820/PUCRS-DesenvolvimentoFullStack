// coleção chave/valor que não gera itens com chave repetida (sobrescreve com o último)
var novoMapa = new Map();

novoMapa.set("11/11/2011 - 23:30 - URL", {
  title: "Título do Site",
  url: "URL do Site",
});
novoMapa.set("11/11/2011 - 23:30 - URL", {
  title: "Título do Site",
  url: "URL do Site",
});
novoMapa.set("11/11/2011 - 23:30 - URL", {
  title: "Título do Site",
  url: "URL do Site",
});
novoMapa.set("11/11/2011 - 23:30 - URL", {
  title: "Título do Site",
  url: "URL do Site",
});
novoMapa.set("11/11/2011 - 23:31 - URL", {
  title: "Título do Site",
  url: "URL do Site",
});

var resultado = novoMapa.get("11/11/2011 - 23:30 - URL");

console.log(novoMapa);
console.log(resultado);
