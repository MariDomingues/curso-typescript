export class Negociacao {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    static criaNegociacao(pData: string, pQuantidade: string, pValor: string): Negociacao {

        const exp = /-/g;
        const date = new Date(pData.replace(exp, ','));
        const quantidade = parseInt(pQuantidade);
        const valor = parseFloat(pValor);

        return new Negociacao(date, quantidade, valor);
    }
}