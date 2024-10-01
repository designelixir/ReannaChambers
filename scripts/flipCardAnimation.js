
    class FlipCardAnimation extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.innerHTML = `
        
          <div class="flex-center-center">
          
            <div class="cards-container flex-center-center">
              <div class="card" id="VideoCard" onclick='window.open("ReannaChambers/video")'>
                <div class="card-inner">
                  <div class="card-front flex-center-center">
                    <img src="assets/video-card.svg" style="height: 100%; padding: 15px;" />
                  </div>
                  <div class="card-back flex-center-center">
                    <img src="assets/card-back2.svg" style="height: 100%;" />
                  </div>
                </div>
              </div>
              <div class="card" id="ProductionCard" onclick='window.open("ReannaChambers/production")'>
                <div class="card-inner">
                  <div class="card-front flex-center-center">
                    <img src="assets/production-card.svg" style="height: 100%; padding: 15px;" />
                  </div>
                  <div class="card-back flex-center-center">
                    <img src="assets/card-back2.svg" style="height: 100%;" />
                  </div>
                </div>
              </div>
              <div class="card" id="PhotoCard" onclick='window.open("ReannaChambers/photo")'>
                <div class="card-inner">
                  <div class="card-front flex-center-center">
                    <img src="assets/photo-card.svg" style="height: 100%; padding: 15px;" />
                  </div>
                  <div class="card-back flex-center-center">
                    <img src="assets/card-back2.svg" style="height: 100%;" />
                  </div>
                </div>
              </div>
              <div class="card" id="AboutCard" onclick='window.open("ReannaChambers/about")'>
                <div class="card-inner">
                  <div class="card-front flex-center-center">
                    <img src="assets/about-card.svg" style="height: 100%; padding: 15px;" />
                  </div>
                  <div class="card-back flex-center-center">
                    <img src="assets/card-back2.svg" style="height: 100%;" />
                  </div>
                </div>
              </div>
            </div>
            <button class="shuffle-button hover" id="shuffle-cards" onclick="shuffle(true)" >shuffle</button>
          </div>

          
        `;

        this.initFlipCardAnimation();
      }

      initFlipCardAnimation() {
        // Declare the leaderCard array
        var leaderCard = ['#AboutCard', '#PhotoCard', '#ProductionCard', '#VideoCard'];

        function shuffle(executeShift) {
          function clearCardClasses(card) {
            $(card).removeClass('card-position-1 card-position-2 card-position-3 card-position-4');
          }

          if (executeShift) {
            leaderCard.push(leaderCard.shift());
          } 
          // Loop through the cards in reverse order
          for (var i = leaderCard.length - 1; i >= 0; i--) {
            clearCardClasses(leaderCard[i]);
            $(leaderCard[i]).removeAttr('style');
            $(leaderCard[i]).addClass('card-position-' + (i + 1));
          }


        }

        // Step 1: Stack cards on top of each other with the back facing
        $('.card').addClass('stacked');

        // Step 2: Flip cards one by one and move them to the right stack
        $('.card').each(function (index) {
          var $this = $(this);
          setTimeout(function () {
            $this.removeClass('stacked').addClass('flipped');
            setTimeout(function () {
              $this.addClass('moved');
            }, 600);
          }, index * 1000);
        });

        // Step 3: Fan out the cards after they are all moved
        setTimeout(function () {
          shuffle(false); // Call shuffle after a delay
        }, 5000);

        // Shuffle button handler
        document.querySelector('#shuffle-cards').addEventListener('click', function () {
          shuffle(true);
        });
      }
    }

    
    customElements.define('flip-card-animation', FlipCardAnimation);

