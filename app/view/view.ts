export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(pSeletor: string, pEscapar?: boolean) {

        const elemento = document.querySelector(pSeletor);

        if (elemento) {
            this.elemento = elemento as HTMLElement;

        } else {
            throw Error(`Seletor ${pSeletor} não existe no DOM. Verfique!`);
        }

        this.escapar = pEscapar ? pEscapar : false;
    }

    protected abstract template(pModel: T): string;

    update(pModel: T): void {

        let template = this.template(pModel);

        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elemento.innerHTML = this.template(pModel);
    }
}