export class MensagemView {
    elemento;
    constructor(pSeletor) {
        this.elemento = document.querySelector(pSeletor);
    }
    template(pModel) {
        return `
            <p class="alert alert-info">
                ${pModel}
            </p>
        `;
    }
    update(pModel) {
        this.elemento.innerHTML = this.template(pModel);
    }
}
