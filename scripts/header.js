class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="mainHeader" class="flex-center-center flex-column">
      <nav class="flex-center-spaceevenly">
          <a href="/ReannaChambers/about" class="nav-link hover engraved" id="About">About</a>
          <a href="/ReannaChambers/photo" class="nav-link hover engraved" id="Photo">Photo</a>
          
          <h1 class="logo desktop-logo hover engraved" style="font-family: 'medusa', sans-serif; font-size: 36px">Reanna Chambers </h1>
          <a href="/ReannaChambers/production" class="nav-link hover engraved" id="Production">Production</a>
          <a href="/ReannaChambers/video" class="nav-link hover engraved" id="Video">Video</a>
          
      </nav>
      <h1 class="logo mobile-logo hover engraved" style="font-family: 'medusa', sans-serif; font-size: 36px" onclick="window.open('/', '_self')"/>Reanna Chambers </h1>
      
    </header>
    
`;
  }
}

customElements.define('header-component', Header);

//Determine the active page
$(document).ready(function () {
  var customName = $("#navigation").data("nav");
  console.log(customName)
  $('#' + customName).addClass('active-link')
});
