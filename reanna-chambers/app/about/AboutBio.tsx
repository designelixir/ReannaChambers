'use client'
import Link from "next/link"
import Image from "next/image"

export default function AboutBio(){
    return(

        <>
        <div className=" split-section flex-start-start">
            <div className="left-60">
                <p id="bioParagraph" className="white-text-glow bio-font" ><i>
                    Reanna Chambers is a photographer, producer, and artist from Los Angeles, California, based in Honolulu, Hawai&apos;i. Over the past decade she has grown to understand many languages of production, including marketing campaigns, art direction, film production, and cinematography. She has also had the privilege of documenting and assisting with fine art installations and large-scale murals. Reanna thrives on pushing her creative boundaries, and living in Hawai&apos;i has deepened her appreciation for storytelling, cultural landscapes, and the creative communities that inspire her.

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
          
        </>
    )
}