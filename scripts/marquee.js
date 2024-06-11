class MarqueeComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="marquee">
                <div class="marquee-content">
                    ${this.generateKnives(30)}
                </div>
            </div>
        `;
    }

    

    generateKnives(count) {
        let knives = '';
        for (let i = 0; i < count; i++) {
            knives += `<div class="knife"></div>`;
        }
        return knives;
    }

    
}

customElements.define('marquee-component', MarqueeComponent);
