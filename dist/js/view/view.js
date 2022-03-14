export class View {
    elemento;
    escapar = false;
    constructor(pSeletor, pEscapar) {
        const elemento = document.querySelector(pSeletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${pSeletor} não existe no DOM. Verfique!`);
        }
        this.escapar = pEscapar ? pEscapar : false;
    }
    update(pModel) {
        let template = this.template(pModel);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = this.template(pModel);
    }
}
