'use client'
import Link from "next/link"
import Image from "next/image"
import WelcomeMarquee from "../components/WelcomeMarquee"

export default function AboutBio(){
    return(

        <>
        <div className=" split-section flex-start-start">
            <div className="left-60">
                <p id="bioParagraph" className="white-text-glow bio-font" ><i>
                Reanna Chambers is a producer, photographer, and artist from Los Angeles, California, based in Honolulu, Hawai&apos;i. Over the past 5 years, she has gained experience across all facets of creative production, including marketing campaigns, art direction, film production, and event coordination. She has also had the privilege of documenting and assisting with fine art installations and large-scale murals. Reanna thrives on pushing the boundaries of her creativity and living in Hawai&apos;i has deepened her appreciation for storytelling and the honoring of rich cultural landscapes and the creative communities that inspire her work. 
                </i></p>
                <Image
                    width={75}
                    height={75}
                    alt="Goodluckbuck Dice"
                    src="./glowy-dice.svg"
                >
                </Image>
            </div>
            <div className="left-40 flex-center-center" id="socialIcons">
                <div className="flex-start-start flex-column no-flex-grow" >
                    <Link href="https://instagram.com/reannasea" target="_blank" className="flex-center-start no-flex-grow margin-bottom no-link-styling" >
                        <span className="icon-instagram social-icon white-text-glow"></span>
                        <p className="white-text modern-font s-text white-text-glow">@reannasea</p>
                    </Link>
                    <Link href="https://instagram.com/reannasea" target="_blank" className="flex-center-start no-flex-grow margin-bottom no-link-styling">
                        <span className="icon-email social-icon white-text-glow"></span>
                        <p className="white-text modern-font s-text white-text-glow">reannachambers@gmail.com</p>
                    </Link>
                    <Link href="https://www.youtube.com/@reannasea" target="_blank" className="flex-center-start no-flex-grow no-link-styling">
                        <span className="icon-youtube social-icon white-text-glow"></span>
                        <p className="white-text modern-font s-text white-text-glow">@reannasea</p>
                    </Link>
                    <Link href="https://foundation.app/@reanna" target="_blank" className="flex-center-start no-flex-grow no-link-styling margin-top">
                    <span className="icon-foundations social-icon white-text-glow" style={{fontSize: '26px'}}></span>
                        <p className="white-text modern-font s-text white-text-glow">@reanna</p>
                    </Link>
                </div>
            </div>
            
            <style jsx>{`
            .split-section {width: 100%;}
            .left-60 {width: 60%; padding: 50px 0;}
            .left-40 {width: 40%;}
            #socialIcons {margin-top: 50px;}
            @media screen and (max-width: 850px) {
                .left-60 {width: 100%; padding: 25px 0;}
                .split-section {flex-direction: column;}
                .left-40 {width: 100%; padding-bottom: 50px;}
                #socialIcons {align-items: flex-start; justify-content: flex-start;}
            }
      `}</style>
            
          </div>
          <div className="dark-section">
            <WelcomeMarquee items={['Creative Direction', 'Photography', 'Brand Consulting', 'Casting', 'Prop Styling', 'Art Direction', 'Content Creation', 'Filming',
                 'Coloring', 'Producing', 'Styling', 'Painting', 'Art Installing', 'Editing', 'Social Media', 'Set Design', "Locations", "Permitting", 'Making Coffee ♥',]}></WelcomeMarquee>
        </div>
        </>
    )
}