import { Negociacao } from "./models/negociacoes.js";
const negociacao = new Negociacao(new Date(), 10, 200);
console.log(negociacao);
//negociacao.quantidade = 1000
console.log(negociacao.volume);
