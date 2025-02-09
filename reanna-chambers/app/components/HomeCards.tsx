import PlayingCardFormat from "./PlayingCardFormat"




export default function HomeCards(){
    return (
    <div className="flex-center-center flex-column full-width">
      <div id="positionerWrapper" className="flex-center-center positioner-wrapper full-width">
        
           
        <div className="card flipped animation-1-card flex-start-center"  id="AboutCard" >
            <div className="card-inner">
                <div className="card-front flex-center-center about-card-front">
                    <PlayingCardFormat title="About" color="var(--off-black)"></PlayingCardFormat>
                </div>
                <div className="card-back flex-center-center">
                    <div className="card-back-design"></div>
                </div>
            </div>
        </div>
        
        
          
          <div className="card flipped card-hover animation-1-card flex-start-center" id="PhotoCard" >
            <div className="card-inner">
                <div className="card-front flex-center-center photo-card-front">
                    <PlayingCardFormat title="Photo" color="var(--deep-red)"></PlayingCardFormat>
                </div>
                <div className="card-back flex-center-center">
                    <div className="card-back-design"></div>
                </div>
            </div>
        </div>
        
        
          <div className="card flipped animation-1-card flex-start-center" id="ProductionCard">
            <div className="card-inner">
                <div className="card-front flex-center-center production-card-front">
                    <PlayingCardFormat title="Production" color="var(--off-black)"></PlayingCardFormat>
                </div>
                <div className="card-back flex-center-center">
                    <div className="card-back-design"></div>
                </div>
            </div>
        </div>
        
        
          <div className="card flipped animation-1-card flex-start-center" id="VideoCard">
            <div className="card-inner">
                <div className="card-front flex-center-center video-card-front">
                    <PlayingCardFormat title="Video" color="var(--deep-red)"></PlayingCardFormat>
                </div>
                <div className="card-back flex-center-center">
                    <div className="card-back-design"></div>
                </div>
            </div>
        </div>
        
      </div>

    </div>
    )
}