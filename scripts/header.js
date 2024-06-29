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
    <img class="mobile-logo hover" src="assets/logo2.svg" style="height: 15px; margin-top: 10px;"  alt="logo" onclick="changeLogo()"/>
      <nav class="flex-center-spaceevenly">
          <a href="/ReannaChambers/about" class="nav-link hover engraved" id="About">About</a>
          <a href="/ReannaChambers/photo" class="nav-link hover engraved" id="Photo">Photo</a>
          
          <img src="assets/logo2.svg" class="desktop-logo hover" style="height: 20px;" id="changeLogo" alt="logo" onclick="changeLogo()"/>
          <a href="/ReannaChambers/production" class="nav-link hover engraved" id="Production">Production</a>
          <a href="/ReannaChambers/video" class="nav-link hover engraved" id="Video">Video</a>
          
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

    console.log($image.attr('src'));
    if ($image.attr('src') === 'assets/logo2.svg') {
        console.log("nice");
        $image.attr('src', 'assets/logo3.svg');
        $image.css('height', '50px')
    } else {
        $image.attr('src', 'assets/logo2.svg');
        $image.css('height', '20px')
    }
}