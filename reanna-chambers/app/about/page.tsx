import Image from "next/image";
import Navigation from "../components/Navigation"
import '../globals.css';
import Link from "next/link";
import WelcomeMarquee from "../components/WelcomeMarquee";
export default function AboutPage(){
  


  return (
    <section>
      <Navigation></Navigation>
      <div className="reanna-portrait-bg flex-end-center" >
            <div className="reanna-portrait"></div>
        </div>
      <div className="dark-section basic-padding split-section flex-start-start">
        <div className="left-60">
            <p className="white-text"><i>
            I'm an artist, photographer, producer, and videographer currently based in Honolulu, Hawai'i. My career began as a barista, where I developed a passion for creativity and connection. This led me to freelance work as an analog photographer, video editor, and colorist, honing my ability to manage multiple projects simultaneously. Since then, I've gained experience in all facets of production, from art direction and styling to permitting, event coordination, and various pre- and post-production tasks. My work merges technical skill with creative intuition, capturing unique moments that evoke emotion and connection. Let's connect!
            </i></p>
            
        </div>
        <div className="left-40 flex-center-center" id="socialIcons">
            <div className="flex-start-start flex-column no-flex-grow" >
                <Link href="https://instagram.com/reannasea" className="flex-center-start no-flex-grow margin-bottom no-link-styling" >
                    <Image src="./icons/instagram.svg" width={25} height={25} alt="Instagram Icon" className="margin-right"></Image>
                    <p className="white-text ">@reannasea</p>
                </Link>
                <Link href="https://instagram.com/reannasea" className="flex-center-start no-flex-grow no-link-styling">
                    <Image src="./icons/email.svg" width={25} height={25} alt="Email Icon" className="margin-right"></Image>
                    <p className="white-text ">reannachambers@gmail.com</p>
                </Link>
            </div>
        </div>
      </div>
      <div style={{backgroundColor: 'var(--offblack)'}}>
        <WelcomeMarquee items={['Creative Direction', 'Photography', 'Brand Consulting', 'Casting', 'Prop Styling', 'Art Direction', 'Content Creation', 'Filming', 'Coloring', 'Producing', 'Styling', 'Painting', 'Art Installing', 'Editing', 'Social Media', 'Set Design', 'Locations and Permitting', 'Coffee Making :)',]}></WelcomeMarquee>
      </div>
      <div className=" basic-padding image-split flex-start-start flex-wrap">
        {/* <div style={{minWidth: '600px', marginBottom: '50px'}} className="flex-start-start left-60">
            <div style={{ width: '50%', maxWidth: '450px', marginRight: '25px' }}>
                <Image
                src="/portraits/reanna-2.png" // Replace with your actual image path
                alt="Reanna Image 1"
                layout="responsive" // Maintains the aspect ratio
                width={300} // Arbitrary values to maintain aspect ratio
                height={200} // Adjust according to your image's ratio
                className="reanna-image"
                />
            </div>
            <div style={{ width: '50%', maxWidth: '450px', marginRight: '25px' }}>
                <Image
                src="/portraits/reanna-1.JPG" // Replace with your actual image path
                alt="Reanna Image 2"
                layout="responsive" // Maintains the aspect ratio
                width={300} // Arbitrary values to maintain aspect ratio
                height={200} // Adjust according to your image's ratio
                className="reanna-image"
                />
            </div>
        </div> */}
        <div id="clientList">
            <h2><span className="aalt">C</span><span style={{textDecoration: 'underline'}}>LIENT</span> <span className="aalt" style={{paddingRight: '2px'}}>L</span><span style={{textDecoration: 'underline'}}>IST</span></h2>
            <br></br><br></br>
            <p className="all-caps">American Savings Bank</p>
            <p className="all-caps">Anna Jean Kos</p>
            <p className="all-caps">Andie Swim</p>
            <p className="all-caps">Asics</p>
            <p className="all-caps">ASOS</p>
            <p className="all-caps">Drew House</p>
            <p className="all-caps">Hawaiian Airlines</p>
            <p className="all-caps">Jams World</p>
            <p className="all-caps">Kona Big Wave</p>
            <p className="all-caps">Marie Claire UK</p>
            <p className="all-caps">Olukai</p>
            <p className="all-caps">Purelei</p>
            <p className="all-caps">Roark</p>
            <p className="all-caps">Roxy</p>
            <p className="all-caps">Rowing Blazers</p>
            <p className="all-caps">Savor Brands</p>
            <p className="all-caps">Specialty Coffee Assosciation Sustainable</p>
            <p className="all-caps">Coastlines</p>
            <p className="all-caps">Towa</p>
            <p className="all-caps">WSL</p>
        </div>
        </div>
        <div className="dark-section basic-padding">
        <h2 className="white-text">
            <span className="aalt">A</span>
            <span style={{textDecoration: 'underline'}}>RT</span>&nbsp; 
            <span className="aalt">E</span>
            <span style={{textDecoration: 'underline'}}>XHIBITIONS</span>
        </h2>
        <br></br><br></br>
        <div id="artExhibitionsList">
            <p className="white-text"><i>January 2025 | Fiberworkshop —---------------------------------------------------</i></p>
            <p className="white-text"><i>January 2024 | Fiberworkshop “A Core Memory” | Kaimana Beach Hotel, HI</i></p>
            <p className="white-text"><i>June 2019 | Girl Group Show at Treehouse | Kaka&apos;ako, HI</i></p>
            <p className="white-text"><i>May 2019 | Analog Sunshine Recorders at Single Double | Chinatown, HI</i></p>
            <p className="white-text"><i>January 2019 | Untitled group show at Morning Glass | Manoa, HI</i></p>
            <p className="white-text"><i>December 2018 | Analog Sunshine Recorders at Aupuni Space | Kaka&apos;ako, HI</i></p>
            <p className="white-text"><i>October 2018 |  Local Colors Gallery at Hawaiian Airlines |  Honolulu, HI.</i></p>
            <p className="white-text"><i>July 2018 | Group show "Days Off." at Aupuni Space | Kaka&apos;ako, HI</i></p>
            <p className="white-text"><i>February 2018 | Untitled first solo show at Bethel Union |  Chinatown, HI</i></p>
        </div>
       








        </div>
     
    </section>
  );
};


