import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface ImageData {
  path: string;
  caption?: string;
  wide: boolean;
  ultraWide?: boolean;
}

export interface ProjectData {
  id?: string;
  title: ReactNode;
  subtitle?: string;
  description?: ReactNode;
  mainImage: string;
  imagesAndCaptions?: ImageData[];
  className?: string;
  columnLayout?: ReactNode;
}
  
  export const projectCards: ProjectData[] = [
    {
      id: "card1",
      title: "Itzcalli Marie",
      mainImage: "photography/ItzcalliMarie/ItzcalliMarie-1.jpg",
      className: "tall-card",
      columnLayout:
      <div className="mason-grid">
          <img src="photography/ItzcalliMarie/ItzcalliMarie-3.jpg" className="mason-1 mason-item" alt="Itzcalli Marie Photo 3"></img>
          <div className="mason-inner-container">
            <img src="photography/ItzcalliMarie/ItzcalliMarie-2.jpg" className="mason-2 mason-item" alt="Itzcalli Marie Photo 2"></img>
            <img src="photography/ItzcalliMarie/ItzcalliMarie-1.jpg" className="mason-2 mason-item" alt="Itzcalli Marie Photo 1"></img>
          </div>
          <img src="photography/ItzcalliMarie/ItzcalliMarie-6.jpg" className="mason-1 mason-item" alt="Itzcalli Marie Photo 6"></img>
          <div className="mason-inner-container">
            <img src="photography/ItzcalliMarie/ItzcalliMarie-5.jpg" className="mason-2 mason-item" alt="Itzcalli Marie Photo 5"></img>
            <img src="photography/ItzcalliMarie/ItzcalliMarie-7.jpg" className="mason-2 mason-item" alt="Itzcalli Marie Photo 7"></img>
          </div>
          <div className="mason-inner-container">
            <img src="photography/ItzcalliMarie/ItzcalliMarie-4.jpg" className="mason-2 mason-item" alt="Itzcalli Marie Photo 4"></img>
            <img src="photography/ItzcalliMarie/ItzcalliMarie-8.jpg" className="mason-2 mason-item" alt="Itzcalli Marie Photo 8"></img>
          </div>
      </div>
    },
    {
      id: "card2",
      title: "Anna Atkinson",
      subtitle: "Anna Jean Kos",
      mainImage: "photography/AnnaJeanKos/AJKcaves-18.jpg",
      className: "wide-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/AnnaJeanKos/AJKcaves-18.jpg" className="mason-2 mason-item" alt="Anna Jean Kos Photo 18"></img>
        <img src="photography/AnnaJeanKos/AJKcaves-32.jpg" className="mason-2 mason-item" alt="Anna Jean Kos Photo 32"></img>
        <div className="mason-inner-container">
          <img src="photography/AnnaJeanKos/AJKcaves-5.jpg" className="mason-1 mason-item" alt="Anna Jean Kos Photo 5"></img>
          <img src="photography/AnnaJeanKos/AJKcaves-31.jpg" className="mason-1 mason-item" alt="Anna Jean Kos Photo 31"></img>
        </div>
        <img src="photography/AnnaJeanKos/AJKcaves-27.jpg" className="mason-1 mason-item" alt="Anna Jean Kos Photo 27"></img>
        <div className="mason-inner-container">
          <img src="photography/AnnaJeanKos/AJKcaves-33.jpg" className="mason-1 mason-item" alt="Anna Jean Kos Photo 33"></img>
          <img src="photography/AnnaJeanKos/AJKcaves-40.jpg" className="mason-1 mason-item" alt="Anna Jean Kos Photo 40"></img>
        </div>
        <img src="photography/AnnaJeanKos/AJKcaves-38.jpg" className="mason-1 mason-item" alt="Anna Jean Kos Photo 38"></img>
      </div>
    },
    {
      id: "card3",
      title: "Darling Rooftop NYC",
      mainImage: "photography/DarlingRooftop/Darling-25.jpg",
      className: "tall-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/DarlingRooftop/Darling-57.jpg" className="mason-1 mason-item" alt="Darling Rooftop NYC Photo 57"></img>
        <div className="mason-inner-container mason-1">
          <div className="mason-50-container">
            <img src="photography/DarlingRooftop/Darling-25.jpg" className="mason-1  mason-item" alt="Darling Rooftop NYC Photo 25"></img>
            <img src="photography/DarlingRooftop/Darling-22.jpg" className="mason-1 mason-item" alt="Darling Rooftop NYC Photo 22"></img>
            <img src="photography/DarlingRooftop/Darling-53.jpg" className="mason-1 mason-item" alt="Darling Rooftop NYC Photo 53"></img>
          </div>
          <div>
            <img src="photography/DarlingRooftop/Darling-44.jpg" className="mason-1 mason-item" alt="Darling Rooftop NYC Photo 44"></img>
            <img src="photography/DarlingRooftop/Darling-34.jpg" className="mason-1 mason-item" alt="Darling Rooftop NYC Photo 34"></img>
            <img src="photography/DarlingRooftop/Darling-12.jpg" className="mason-1 mason-item" alt="Darling Rooftop NYC Photo 12"></img>
            <img src="photography/DarlingRooftop/Darling-5.jpg" className="mason-1 mason-item" alt="Darling Rooftop NYC Photo 5"></img>
          </div>
        </div>
      </div>
    },
    {
      id: "card4",
      title: "Estelle Ines",
      subtitle: "Towa & Janessa Leone",
      mainImage: "photography/EstelleInes/Towa-43.jpg",
      className: "tall-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/EstelleInes/Towa-19.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 19"></img>
        <div className="mason-inner-container">
          <div className="mason-50-container">
            <img src="photography/EstelleInes/Towa-3.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 3"></img>
            <img src="photography/EstelleInes/Towa-43.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 33"></img>
            <img src="photography/EstelleInes/Towa-74.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 74"></img>
            <img src="photography/EstelleInes/Towa-14.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 14"></img>
          </div>
          <div className="mason-50-container">
            <img src="photography/EstelleInes/Towa-16.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 16"></img>
            <img src="photography/EstelleInes/Towa-28.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 28"></img>
            <img src="photography/EstelleInes/Towa-79.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 79"></img>
            <img src="photography/EstelleInes/Towa-48.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 48"></img>
            <img src="photography/EstelleInes/Towa-66.jpg" className="mason-1 mason-item" alt="Estelle Ines Photo 66"></img>
          </div>
          
        </div>
        
        
        
        
        
        

      </div>
    },
    {
      id: "card5",
      title: "The Gemini Set",
      subtitle: "Goodluckbuck & Anna Jean Kos",
      description: <div>
        <h3>The Gemini Set, a collaboration between Goodluckbuck and Anna Jean Kos.</h3>
        <p><strong>Production:</strong> Anna Atkinson, Grace Lacio</p>
        <p><strong>Models:</strong> Brennan Alexa, Danielle McCleave</p>
      </div>,
      mainImage: "photography/TheGeminiSet/GeminiSet-5(wide).jpg",
      className: "wide-card",
      columnLayout:
      <div className="mason-grid">
        <img src="photography/TheGeminiSet/GeminiSet-2(wide).jpg" className="mason-1 mason-item" alt="Gemini Set Photo 2" />
        <div className="mason-inner-container">
          <img src="photography/TheGeminiSet/GeminiSet-3(wide).jpg" className="mason-2 mason-item" alt="Gemini Set Photo 3"/>
          <img src="photography/TheGeminiSet/GeminiSet-1(wide).jpg" className="mason-2 mason-item" alt="Gemini Set Photo 1"/>
        </div>
        <div className="mason-inner-container">
          <div className="mason-50-container">
            <img src="photography/TheGeminiSet/GeminiSet-6(tall).jpg" className="mason-1 mason-item" alt="Gemini Set Photo 11"/>
            <img src="photography/TheGeminiSet/GeminiSet-5(wide).jpg" className="mason-1 mason-item" alt="Gemini Set Photo 5"/>  
          </div>
          <div className="mason-50-container">
            <img src="photography/TheGeminiSet/GeminiSet-8(wide).jpg" className="mason-1 mason-item" alt="Gemini Set Photo 8"/>
            <img src="photography/TheGeminiSet/GeminiSet-7(tall).jpg" className="mason-1 mason-item" alt="Gemini Set Photo 9"/>
          </div>
        </div>
        <img src="photography/TheGeminiSet/GeminiSet-10(wide).jpg" className="mason-2 mason-item" alt="Gemini Set Photo 10"/>
        <img src="photography/TheGeminiSet/GeminiSet-4(wide).jpg" className="mason-2 mason-item" alt="Gemini Set Photo 4"/>  
        <img src="photography/TheGeminiSet/GeminiSet-11(wide).jpg" className="mason-1 mason-item" alt="Gemini Set Photo 11"/>
        <img src="photography/TheGeminiSet/GeminiSet-9(wide).jpg" className="mason-2 mason-item" alt="Gemini Set Photo 9"/>
      </div>
    },
    {
      id: "card6",
      title: "Kaia Soul",
      subtitle: "The Queen Has Risen",
      description: 
      <Link className="no-link-styling" href="https://open.spotify.com/track/4bkwhGjYnrCISHZ0bRuXtF?si=c8ca154282414900">
        <button className="flex-center-start hover ">
        <Image
        height={30}
        width={30}
        alt="Spotify logo"
        src="icons/spotify.svg"
        ></Image>
        <p className="no-style-link all-caps">&nbsp;Listen to the track</p>
        </button>
      </Link>
      ,
      mainImage: "photography/KaiaSoul/KaiaSoul-1(wide).jpg",
      className: "wide-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/KaiaSoul/KaiaSoul-4(wide).jpg" className="mason-1 mason-item" alt="Kaia Soul Photo 4"/>
        <img src="photography/KaiaSoul/KaiaSoul-3(wide).jpg" className="mason-2 mason-item" alt="Kaia Soul Photo 3"/>
        <img src="photography/KaiaSoul/KaiaSoul-6(wide).jpg" className="mason-2 mason-item" alt="Kaia Soul Photo 6"/>
        <img src="photography/KaiaSoul/KaiaSoul-1(wide).jpg" className="mason-1 mason-item" alt="Kaia Soul Photo 1"/>
        <img src="photography/KaiaSoul/KaiaSoul-5(wide).jpg" className="mason-2 mason-item" alt="Kaia Soul Photo 5"/>
        <img src="photography/KaiaSoul/KaiaSoul-7(wide).jpg" className="mason-2 mason-item" alt="Kaia Soul Photo 7"/>
        <img src="photography/KaiaSoul/KaiaSoul-8(wide).jpg" className="mason-2 mason-item" alt="Kaia Soul Photo 8"/>
        <img src="photography/KaiaSoul/KaiaSoul-2(wide).jpg" className="mason-2 mason-item" alt="Kaia Soul Photo 2"/>
      </div>
    },
    
    {
      id: "card7",
      title: "Monet Cheung",
      mainImage: "photography/MonetCheung/Monet-36.jpg",
      className: "tall-card",
      columnLayout:
      <div className="mason-grid">
        <img src="photography/MonetCheung/Monet-1.jpg" className="mason-1 mason-item" alt="Monet Cheung Photo 1"/>
        <img src="photography/MonetCheung/Monet-36.jpg" className="mason-2 mason-item" alt="Monet Cheung Photo 36"/>
        <img src="photography/MonetCheung/Monet-2.jpg" className="mason-2 mason-item" alt="Monet Cheung Photo 2"/>
        <img src="photography/MonetCheung/Monet-3.jpg" className="mason-2 mason-item" alt="Monet Cheung Photo 3"/>
        <img src="photography/MonetCheung/Monet-8.jpg" className="mason-2 mason-item" alt="Monet Cheung Photo 8"/>
        <img src="photography/MonetCheung/Monet-11.jpg" className="mason-2 mason-item" alt="Monet Cheung Photo 11"/>
        <img src="photography/MonetCheung/Monet-14.jpg" className="mason-2 mason-item" alt="Monet Cheung Photo 14"/>
        <img src="photography/MonetCheung/Monet-33.jpg" className="mason-2 mason-item" alt="Monet Cheung Photo 33"/>
        <img src="photography/MonetCheung/Monet-35.jpg" className="mason-2 mason-item" alt="Monet Cheung Photo 35"/>
      </div>
    },
    {
      id: "card8",
      title: "The Kaimana Beach Hotel",
      mainImage: "photography/KaimanaBeachHotel/KaimanaBeachDigis-36.jpg",
      className: "tall-card",
      columnLayout: 
      <div className="mason-grid">
        <div className="mason-inner-container">
          <div className="mason-50-container">
            <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-13.jpg" className="mason-1 mason-item" alt="Kaimana Beach Hotel Photo 13"/>
          </div>
          <div className="mason-50-container">
            <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-4.jpg" className="mason-1 mason-item" alt="Kaimana Beach Hotel Photo 4"/>
            <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-2.jpg" className="mason-1 mason-item" alt="Kaimana Beach Hotel Photo 2"/>
          </div>
        </div>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-56.jpg" className="mason-2 mason-item" alt="Kaimana Beach Hotel Photo 56"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-31.jpg" className="mason-2 mason-item" alt="Kaimana Beach Hotel Photo 31"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-36.jpg" className="mason-1 mason-item" alt="Kaimana Beach Hotel Photo 36"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-12.jpg" className="mason-2 mason-item" alt="Kaimana Beach Hotel Photo 12"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-3.jpg" className="mason-2 mason-item" alt="Kaimana Beach Hotel Photo 3"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-19.jpg" className="mason-1 mason-item" alt="Kaimana Beach Hotel Photo 19"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachDigis-10.jpg" className="mason-2 mason-item" alt="Kaimana Beach Hotel Photo 10"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachFilm-4.jpg" className="mason-2 mason-item" alt="Kaimana Beach Hotel Photo Film 4"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachFilm-6.jpg" className="mason-1 mason-item" alt="Kaimana Beach Hotel Photo Film 6"/>
        <img src="photography/KaimanaBeachHotel/KaimanaBeachFilm-2.jpg" className="mason-2 mason-item" alt="Kaimana Beach Hotel Photo Film 2"/>
        
        <img src="photography/KaimanaBeachHotel/KaimanaBeachFilm-7.jpg" className="mason-2 mason-item" alt="Kaimana Beach Hotel Photo Film 7"/>
      </div>
    },
    {
      id: "card9",
      title: "Nani Welch Keli'iho'omalu",
      subtitle: 'M3N3HUN3',
      mainImage: "photography/NaniWelch/NaniWelch-10.jpg",
      className: "tall-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/NaniWelch/NaniWelch-12.jpg" className="mason-1 mason-item" alt="Nani Welch Keli'iho'omalu Photo 12"/>
        <img src="photography/NaniWelch/NaniWelch-11.jpg" className="mason-2 mason-item" alt="Nani Welch Keli'iho'omalu Photo 11"/>
        <img src="photography/NaniWelch/NaniWelch-4.jpg" className="mason-2 mason-item" alt="Nani Welch Keli'iho'omalu Photo 4"/>
        <img src="photography/NaniWelch/NaniWelch-3.jpg" className="mason-2 mason-item" alt="Nani Welch Keli'iho'omalu Photo 3"/>
        <img src="photography/NaniWelch/NaniWelch-7.jpg" className="mason-2 mason-item" alt="Nani Welch Keli'iho'omalu Photo 7"/>
        <img src="photography/NaniWelch/NaniWelch-9.jpg" className="mason-1 mason-item" alt="Nani Welch Keli'iho'omalu Photo 9"/>
        <img src="photography/NaniWelch/NaniWelch-8.jpg" className="mason-2 mason-item" alt="Nani Welch Keli'iho'omalu Photo 8"/>
        <img src="photography/NaniWelch/NaniWelch-1.jpg" className="mason-2 mason-item" alt="Nani Welch Keli'iho'omalu Photo 1"/>
        <img src="photography/NaniWelch/NaniWelch-10.jpg" className="mason-2 mason-item" alt="Nani Welch Keli'iho'omalu Photo 10"/>
        <img src="photography/NaniWelch/NaniWelch-6.jpg" className="mason-2 mason-item" alt="Nani Welch Keli'iho'omalu Photo 6"/>
      </div>
    },
    {
      id: "card10",
      title: "Pono Collective Coffee",
      subtitle: 'El Salvador / Guatemala Event',
      mainImage: "photography/PonoCollective/PonoCollective-9.jpg",
      className: "wide-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/PonoCollective/PonoCollective-6.jpg" className="mason-1 mason-item" alt="Pono Collective Photo 6"/>
        <img src="photography/PonoCollective/PonoCollective-1.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 1"/>
        <img src="photography/PonoCollective/PonoCollective-2.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 2"/>
        <img src="photography/PonoCollective/PonoCollective-3.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 3"/>
        <img src="photography/PonoCollective/PonoCollective-4.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 4"/>
        <img src="photography/PonoCollective/PonoCollective-5.jpg" className="mason-1 mason-item" alt="Pono Collective Photo 5"/>
        <img src="photography/PonoCollective/PonoCollective-7.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 7"/>
        <img src="photography/PonoCollective/PonoCollective-8.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 8"/>
        <img src="photography/PonoCollective/PonoCollective-11.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 11"/>
        <img src="photography/PonoCollective/PonoCollective-13.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 13"/>
        <img src="photography/PonoCollective/PonoCollective-12.jpg" className="mason-1 mason-item" alt="Pono Collective Photo 12"/>
        <img src="photography/PonoCollective/PonoCollective-9.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 9"/>
        <img src="photography/PonoCollective/PonoCollective-18.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 18"/>
        <img src="photography/PonoCollective/PonoCollective-14.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 14"/>
        <img src="photography/PonoCollective/PonoCollective-15.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 15"/>
        <img src="photography/PonoCollective/PonoCollective-16.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 16"/>
        <img src="photography/PonoCollective/PonoCollective-19.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 19"/>
        <img src="photography/PonoCollective/PonoCollective-24.jpg" className="mason-1 mason-item" alt="Pono Collective Photo 24"/>
        <img src="photography/PonoCollective/PonoCollective-20.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 20"/>
        <img src="photography/PonoCollective/PonoCollective-21.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 21"/>
        <img src="photography/PonoCollective/PonoCollective-22.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 22"/>
        <img src="photography/PonoCollective/PonoCollective-23.jpg" className="mason-2 mason-item" alt="Pono Collective Photo 23"/>
        <img src="photography/PonoCollective/PonoCollective-17.jpg" className="mason-1 mason-item" alt="Pono Collective Photo 17"/>
        
      </div>
    },
    {
      id: "card11",
      title: "Sydney Malia Walker",
      subtitle: 'Azure Co',
      mainImage: "photography/TowaClothing/Azure-19.jpg",
      className: "tall-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/TowaClothing/Azure-16.jpg" className="mason-1 mason-item" alt="Towa Clothing Photo 16"/>
        <img src="photography/TowaClothing/Azure-19.jpg" className="mason-2 mason-item" alt="Towa Clothing Photo 19"/>
        <img src="photography/TowaClothing/Azure-12.jpg" className="mason-2 mason-item" alt="Towa Clothing Photo 12"/>
        <img src="photography/TowaClothing/Azure-129.jpg" className="mason-2 mason-item" alt="Towa Clothing Photo 129"/>
        <img src="photography/TowaClothing/Azure-26.jpg" className="mason-2 mason-item" alt="Towa Clothing Photo 26"/>
        <img src="photography/TowaClothing/Azure-43.jpg" className="mason-1 mason-item" alt="Towa Clothing Photo 43"/>
        <img src="photography/TowaClothing/Azure-85.jpg" className="mason-1 mason-item" alt="Towa Clothing Photo 85"/>
        <img src="photography/TowaClothing/Azure-32.jpg" className="mason-2 mason-item" alt="Towa Clothing Photo 32"/>
        <img src="photography/TowaClothing/Azure-5.jpg" className="mason-2 mason-item" alt="Towa Clothing Photo 5"/>
        <img src="photography/TowaClothing/Azure-8.jpg" className="mason-2 mason-item" alt="Towa Clothing Photo 8"/>
        <img src="photography/TowaClothing/Azure-33.jpg" className="mason-2 mason-item" alt="Towa Clothing Photo 33"/>
        <img src="photography/TowaClothing/Azure-69.jpg" className="mason-1 mason-item" alt="Towa Clothing Photo 69"/>
      </div>
    },
    {
      id: "card12",
      title: "The Wayfinder Hotel",
      subtitle: 'Waikiki',
      mainImage: "photography/WayfinderHotel/Wayfinder-5.jpg",
      className: "wide-card",
      columnLayout: 
      <div className="mason-grid">
        <div className="mason-inner-container">
          <div className="mason-50-container">
            <img src="photography/WayfinderHotel/Wayfinder-1.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 1"/>
            <img src="photography/WayfinderHotel/Wayfinder-6.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 6"/>
            
            <img src="photography/WayfinderHotel/Wayfinder-12.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 12"/>
            <img src="photography/WayfinderHotel/Wayfinder-7.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 7"/>
            
          </div>
          <div className="mason-50-container">
            <img src="photography/WayfinderHotel/Wayfinder-10.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 10"/>
            <img src="photography/WayfinderHotel/Wayfinder-14.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 14"/>
            <img src="photography/WayfinderHotel/Wayfinder-4.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 4"/>
          </div>
        </div>
        <img src="photography/WayfinderHotel/Wayfinder-3.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 3"/>
        <div className="mason-inner-container">
          <div className="mason-50-container">
          <img src="photography/WayfinderHotel/Wayfinder-13.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 13"/>
          <img src="photography/WayfinderHotel/Wayfinder-8.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 8"/>    
          </div>
        <div className="mason-50-container">   
          <img src="photography/WayfinderHotel/Wayfinder-5.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 5"/> 
          <img src="photography/WayfinderHotel/Wayfinder-11.jpg" className="mason-1 mason-item" alt="Wayfinder Hotel Photo 11"/>
        </div>
        </div>
      </div>
    },
    {
      id: "card13",
      title: "AVVA Brand",
      subtitle: 'Zeke Lau',
      description: 
      <div className="credits-section margin-bottom">
        <p><strong>DP: </strong> Zak Noyle</p>
        <p><strong>Assist: </strong>Sheadon Shimabukuro</p>
        <p><strong>Athlete:</strong> Zeke Lau</p>
      </div>,
      mainImage: "photography/AVVABrand/AVVA-6.jpg",
      className: "tall-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/AVVABrand/AVVAfilm-131.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
        <img src="photography/AVVABrand/AVVAfilm-137.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
        <div className="mason-inner-container">
            <div className="mason-50-container">
              <img src="photography/AVVABrand/AVVAfilm-130.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 11"/>
              <img src="photography/AVVABrand/AVVA-117.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 18"/>
            </div>
            <div className="mason-50-container">
            <img src="photography/AVVABrand/AVVA-114.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 13"/>
            <img src="photography/AVVABrand/AVVAfilm-135.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
            
            </div>
          </div>
        <img src="photography/AVVABrand/AVVA-6.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 6"/>
        
          <div className="mason-inner-container">
            <div className="mason-50-container">
              <img src="photography/AVVABrand/AVVA-11.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 11"/>
              <img src="photography/AVVABrand/AVVA-12.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
            </div>
            <div className="mason-50-container">
            <img src="photography/AVVABrand/AVVA-13.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 13"/>
            <img src="photography/AVVABrand/AVVA-18.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 18"/>
            </div>
          </div>
          <img src="photography/AVVABrand/AVVA-24.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 24"/>
          <img src="photography/AVVABrand/AVVA-28.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 28"/>
          <div className="mason-inner-container">
            <div className="mason-50-container">
              <img src="photography/AVVABrand/AVVA-43.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 11"/>
              <img src="photography/AVVABrand/AVVA-48.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
            </div>
            <div className="mason-50-container">
            <img src="photography/AVVABrand/AVVA-57.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 13"/>
            <img src="photography/AVVABrand/AVVA-60.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 18"/>
            </div>
          </div>
          <img src="photography/AVVABrand/AVVA-67.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 24"/>
          <div className="mason-inner-container">
            <div className="mason-50-container">
              <img src="photography/AVVABrand/AVVA-81.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 11"/>
              <img src="photography/AVVABrand/AVVA-98.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
              <img src="photography/AVVABrand/AVVA-109.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
            </div>
            <div className="mason-50-container">
            <img src="photography/AVVABrand/AVVA-101.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 13"/>
            <img src="photography/AVVABrand/AVVA-105.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 18"/>
            <img src="photography/AVVABrand/AVVA-126.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 18"/>
            </div>
          </div>
          <img src="photography/AVVABrand/AVVAfilm-129.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 18"/>
        
        

        
      </div>
    },
    {
      id: "card14",
      title: "NFTEA",
      subtitle: 'Foundation Collection',
      description: 
      <div>
        <a href="https://foundation.app/collection/tea" target="_blank" className="modern-font">Shop the Foundation NFT Collection</a>
      </div>,
      mainImage: "photography/NFTEA/NFTEA-1.JPG",
      className: "tall-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/NFTEA/NFTEA-6.jpg" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
        <img src="photography/NFTEA/NFTEA-1.JPG" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
        <div className="mason-inner-container">
            <div className="mason-50-container">
              <img src="photography/NFTEA/NFTEA-2.JPG" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
              <img src="photography/NFTEA/NFTEA-3.JPG" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
            </div>
            <div className="mason-50-container">
              <img src="photography/NFTEA/NFTEA-7.png" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
              <img src="photography/NFTEA/NFTEA-5.JPG" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
            </div>
          </div>
          <img src="photography/NFTEA/NFTEA-4.JPG" className="mason-1 mason-item" alt="AVVA Brand Photo 12"/>
          

      </div>
    },
    {
      id: "card15",
      title: "BLKCORAL",
      subtitle: 'American Savings Bank Install',
      description: 
      <div>
        <h3>American Savings Bank Headquarters Honolulu, HI</h3>
        <div className="credits-section">
        <h3>Credits:</h3>
        <p><strong>Art/Sculpture:</strong> Nikole Nelson</p>
        <p><strong>Design:</strong> Sig Zane</p>
        <p><strong>Production Assist:</strong> Amy Rivo</p>
        <p><strong>Art Assist/Photography:</strong> Reanna Chambers</p>
        </div>
        <br></br>
      </div>,
      mainImage: "photography/BLKCORAL/BLKCORAL-9.JPG",
      className: "wide-card",
      columnLayout: 
      <div className="mason-grid">
        <img src="photography/BLKCORAL/BLKCORAL-20.jpeg" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
        <img src="photography/BLKCORAL/BLKCORAL-21.jpeg" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
        <img src="photography/BLKCORAL/BLKCORAL-6.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
        <img src="photography/BLKCORAL/BLKCORAL-15.jpg" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
        <div className="mason-inner-container">
          <div className="mason-50-container">
              <img src="photography/BLKCORAL/BLKCORAL-7.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
              <img src="photography/BLKCORAL/BLKCORAL-1.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
              <img src="photography/BLKCORAL/BLKCORAL-8.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
              <img src="photography/BLKCORAL/BLKCORAL-16.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
              
          </div>
          <div className="mason-50-container">
          <img src="photography/BLKCORAL/BLKCORAL-4.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          <img src="photography/BLKCORAL/BLKCORAL-13.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          <img src="photography/BLKCORAL/BLKCORAL-5.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          <img src="photography/BLKCORAL/BLKCORAL-12.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          <img src="photography/BLKCORAL/BLKCORAL-2.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          </div>
        </div>
        
        <img src="photography/BLKCORAL/BLKCORAL-9.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
        <div className="mason-inner-container">
          <div className="mason-50-container">
            <img src="photography/BLKCORAL/BLKCORAL-3.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/> 
          </div>
          <div className="mason-50-container">
            <img src="photography/BLKCORAL/BLKCORAL-10.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          </div>
        </div>
        
        
        <img src="photography/BLKCORAL/BLKCORAL-11.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
        <div className="mason-inner-container">
          <div className="mason-50-container">
          <img src="photography/BLKCORAL/BLKCORAL-14.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          <img src="photography/BLKCORAL/BLKCORAL-18.JPG" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          </div>
          <div className="mason-50-container">
          <img src="photography/BLKCORAL/BLKCORAL-17.jpeg" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          <img src="photography/BLKCORAL/BLKCORAL-19.jpeg" className="mason-1 mason-item" alt="BLKCORAL Photo"/>
          </div>
        </div>
        
        
        
        
        
        
        
        

        
        
      </div>
    },
  ];
  