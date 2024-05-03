class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="mainHeader" class="flex-center-center flex-column">
      <nav class="flex-center-spaceevenly">
          <a href="../about" class="nav-link hover engraved" id="About">About</a>
          <a href="../photo" class="nav-link hover engraved" id="Photo">Photo</a>
          <h1 class="logo desktop-logo hover engraved" onclick="window.open('/', '_self')"/>Reanna Chambers </h1>
          <a href="../production" class="nav-link hover engraved" id="Production">Production</a>
          <a href="../video" class="nav-link hover engraved" id="Video">Video</a>
          
      </nav>
      <h1 class="logo mobile-logo hover engraved" onclick="window.open('/', '_self')"/>Reanna Chambers </h1>
      <div class="goodluckbuck-header flex-center-center">
          <img src="assets/goodluckbuck.svg" class="logo-icon hover" alt="GoodLuckBuck logo" onclick="window.open('https://www.goodluckbuck.co/')"/>
      </div>
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
