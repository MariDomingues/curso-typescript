import { View } from "./view.js";
export class MensagemView extends View {
    template(pModel) {
        return `
            <p class="alert alert-info">
                ${pModel}
            </p>
        `;
    }
}
