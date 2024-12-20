class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="mainHeader" class="flex-center-center flex-column">
    <div class="star star1"><img src="./assets/sharp-star.svg" style="height: 20px;"/><span style="font-size: 14px; padding-left: 30px;"><img src="./assets/sharp-star.svg" style="height: 20px;"/></span></div>
    <div class="star star2"><span style="font-size: 14px; padding-left: 20px;"><img src="./assets/sharp-star.svg" style="height: 30px;"/></span> <img src="./assets/sharp-star.svg" style="height: 20px;"/></div>
    <div class="star star3"><img src="./assets/sharp-star.svg" style="height: 40px;"/></div>
    <img class="mobile-logo hover" src="assets/reanna-chambers-logo.svg" style="height: 15px; margin-top: 10px;"  alt="logo" onclick="window.open('', '_self')"/>
      <nav class="flex-center-spaceevenly">
          <a href="/about" class="nav-link hover engraved" id="About">About</a>
          <a href="/photo" class="nav-link hover engraved" id="Photo">Photo</a>
          
          <img src="assets/reanna-chambers-logo.svg" class="desktop-logo hover" alt="logo" onclick="changeLogo()" id="changeLogo"/>
          <a href="/production" class="nav-link hover engraved" id="Production">Production</a>
          <a href="/video" class="nav-link hover engraved" id="Video">Video</a>
          
      </nav>
      
      
      
      
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


function changeLogo() {
    var $image = $('#changeLogo');

    if ($image.attr('src') === 'assets/reanna-chambers-alt.svg') {
        
        $image.attr('src', 'assets/reanna-chambers-logo.svg');
        $image.css('height', '75px')
    } else {
        $image.attr('src', 'assets/reanna-chambers-alt.svg');
        $image.css('height', '50px')
    }
}