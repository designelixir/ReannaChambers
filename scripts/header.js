class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="mainHeader" class="flex-center-center">
    <nav class="flex-center-spaceevenly desktop-nav">
        <a href="/about" class="nav-link" id="About">About</a>
        <a href="/photography" class="nav-link" id="Photography">Photography</a>
        <img src="assets/reanna-chambers.svg" class="logo"/>
        <a href="/coloring" class="nav-link" id="Coloring">Coloring</a>
        <a href="/production" class="nav-link" id="Production">Production</a>
    </nav>
    </header>
    <div class="goodluckbuck-header flex-center-center">
        <img src="assets/goodluckbuck.svg" class="logo-icon"/>
    </div>
`;
  }
}

customElements.define('header-component', Header);

//Determine the active page
$(document).ready(function () {
  var customName = $("#mainHeader").data("nav");
  $('#' + customName).addClass('active-link')
  $('#' + customName + "Mobile").addClass('active-link')
});
