import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //private negociacoes: Array<Negociacao> = []
    private negociacoes: Negociacao[] = []
    
    adicionar(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }
    //listar(): ReadonlyArray<Negociacao>{ outra forma utilizadndo o modificador readonly
    listar(): readonly Negociacao[]{

        //return [...this.negociacoes]
        return this.negociacoes
    }
}

