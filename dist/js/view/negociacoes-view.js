import { View } from "./view.js";
export class NegociacoesView extends View {
    template(pModel) {
        console.log("OLA");
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                    ${pModel.lista().map(negociacao => {
            return `
                            <tr>
                                <td>${this.formatarData(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    formatarData(pData) {
        return new Intl.DateTimeFormat().format(pData);
    }
}
