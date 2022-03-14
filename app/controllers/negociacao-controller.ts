import { DiaSemana } from '../enums/dia-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../view/mensagem-view.js';
import { NegociacoesView } from '../view/negociacoes-view.js';

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoes-view", true);
    private mensagemView = new MensagemView("#mensagem-view", false);

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {

        const negociacao = Negociacao.criaNegociacao(this.inputData.value,
             this.inputQuantidade.value, this.inputValor.value);

        console.log(negociacao.data.getDay() === 0);

        if (!this.isDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas!');
            return;
        }

        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);

        this.limparFormulario();
        this.atualizaView();
    }

    private isDiaUtil(pData: Date) {

        return pData.getDay() > DiaSemana.DOMINGO &&
            pData.getDay() < DiaSemana.SABADO;
    }

    private atualizaView() {

        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    private limparFormulario(): void {

        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
