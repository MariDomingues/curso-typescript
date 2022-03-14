export class Negociacao {
    _data;
    quantidade;
    valor;
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaNegociacao(pData, pQuantidade, pValor) {
        const exp = /-/g;
        const date = new Date(pData.replace(exp, ','));
        const quantidade = parseInt(pQuantidade);
        const valor = parseFloat(pValor);
        return new Negociacao(date, quantidade, valor);
    }
}
