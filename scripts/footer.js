class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer class="flex-center-center flex-column footer-container">
        <div class="goodluckbuck-header flex-center-center flex-column hover" onclick="window.open('https://www.goodluckbuck.co/')">
          <img src="assets/goodluckbuck.svg" class="logo-icon" alt="GoodLuckBuck logo"/>
          <p style="font-weight: 800">Visit Reanna's GoodLuckBuck</p>
        </div>
        <p class="white-text" style="font-size: 14px">&copy; 2024 Reanna Chambers </p>
        <a class="white-text hover" id="designElixirCredits" href="https://designelixir.studio" target="_blank">Made with &hearts; by Design Elixir</a>
    </footer>
`;
  }
}

customElements.define('footer-component', Footer);