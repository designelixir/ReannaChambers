import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface ImageData {
  path: string;
  caption?: string;
  wide: boolean;
}

export interface ProjectData {
  id?: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  mainImage: string;
  imagesAndCaptions?: ImageData[];
  className?: string;
}
  
  export const projectCards: ProjectData[] = [
    {
      id: "card1",
      title: "Itzcalli Marie",
      mainImage: "photography/ItzcalliMarie/F1000011.JPG",
      className: "tall-card",
      imagesAndCaptions: [
        { path: 'photography/ItzcalliMarie/000031.JPG', caption: 'Caption 1', wide: false },
        { path: 'photography/ItzcalliMarie/F1000005.JPG', caption: 'Caption 2', wide: false },
        { path: 'photography/ItzcalliMarie/F1000011.JPG', caption: 'Caption 3', wide: false },
      ],
    },
    {
      id: "card2",
      title: "Anna",
      subtitle: "Anna Jean Kos",
      mainImage: "photography/AnnaJeanKos/AJKcaves-33.jpg",
      className: "wide-card",
      imagesAndCaptions: [
        { path: 'photography/AnnaJeanKos/AJKcaves-18.jpg', caption: 'AJKcaves-18.jpg', wide: false },
        { path: 'photography/AnnaJeanKos/AJKcaves-40.jpg', caption: 'AJKcaves-40.jpg', wide: false },
        { path: 'photography/AnnaJeanKos/AJKcaves-5.jpg', caption: 'AJKcaves-5.jpg', wide: false },
      ],
    },
    {
      id: "card3",
      title: "Darling Rooftop NYC",
      mainImage: "photography/DarlingRooftop/Darling-25.jpg",
      className: "tall-card",
      imagesAndCaptions: [
        { path: 'photography/DarlingRooftop/Darling-25.jpg', wide: false },
        { path: 'photography/DarlingRooftop/Darling-44.jpg', caption: 'Darling-44.jpg', wide: false },
        { path: 'photography/DarlingRooftop/Darling-34.jpg', caption: 'Darling-34.jpg', wide: false },
        { path: 'photography/DarlingRooftop/Darling-22.jpg', caption: 'Darling-22.jpg', wide: false },
        { path: 'photography/DarlingRooftop/Darling-12.jpg', caption: 'Darling-12.jpg', wide: false },
        { path: 'photography/DarlingRooftop/Darling-5.jpg', caption: 'Darling-5.jpg', wide: false },
        { path: 'photography/DarlingRooftop/Darling-53.jpg', caption: 'Darling-53.jpg', wide: false },
        { path: 'photography/DarlingRooftop/Darling-57.jpg', wide: false },
      ],
    },
    {
      id: "card4",
      title: "Estelle Ines",
      subtitle: "Towa & Janessa Leone",
      mainImage: "photography/EstelleInes/Towa-21.jpg",
      className: "tall-card",
      imagesAndCaptions: [
        { path: "photography/EstelleInes/Towa-3.jpg", caption: "Towa-3.jpg", wide: false },
        { path: "photography/EstelleInes/Towa-14.jpg", caption: "Towa-14.jpg", wide: false },
        { path: "photography/EstelleInes/Towa-16.jpg", caption: "Towa-16.jpg", wide: false },
        { path: "photography/EstelleInes/Towa-19.jpg", caption: "Towa-16.jpg", wide: false },
        { path: "photography/EstelleInes/Towa-28.jpg", caption: "Towa-28.jpg", wide: false },
        { path: "photography/EstelleInes/Towa-43.jpg", caption: "Towa-43.jpg", wide: false },
        { path: "photography/EstelleInes/Towa-48.jpg", caption: "Towa-48.jpg", wide: false },
        { path: "photography/EstelleInes/Towa-66.jpg", caption: "", wide: false },
        { path: "photography/EstelleInes/Towa-75.jpg", caption: "", wide: false },
        { path: "photography/EstelleInes/Towa-77.jpg", caption: "", wide: false },
        { path: "photography/EstelleInes/Towa-79.jpg", caption: "", wide: false },
        { path: "photography/EstelleInes/Towa-21.jpg", caption: "", wide: false },


      ],
    },
    {
      id: "card5",
      title: "The Gemini Set",
      subtitle: "Goodluckbuck X Anna Jean Kos",
      description: <div>
        <h3>The Gemini Set, a collaboration between Goodluckbuck and Anna Jean Kos.</h3>
        <p><strong>Production:</strong> Anna Atkinson, Grace Lacio</p>
        <p><strong>Models:</strong> Brennan Alexa, Danielle McCleave</p>
      </div>,
      mainImage: "photography/TheGeminiSet/GeminiSet-2(wide).jpg",
      className: "wide-card",
      imagesAndCaptions: [
        { path: "photography/TheGeminiSet/GeminiSet-9(wide).jpg", caption: "9", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-1(wide).jpg", caption: "1", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-6(tall).jpg", caption: "6", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-7(tall).jpg", caption: "7", wide: true },
        { path: "photography/TheGeminiSet/GeminiSet-2(wide).jpg", caption: "2", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-3(wide).jpg", caption: "3", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-4(wide).jpg", caption: "4", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-5(wide).jpg", caption: "5", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-8(wide).jpg", caption: "8", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-10(wide).jpg", caption: "10", wide: false },
        { path: "photography/TheGeminiSet/GeminiSet-11(wide).jpg", caption: "11", wide: false },
      ],
    },
    {
      id: "card6",
      title: "Kaia Soul",
      subtitle: "The Queen Has Risen Cover",
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
      mainImage: "photography/KaiaSoul/KaiaSoul-2(wide).jpg",
      className: "tall-card",
      imagesAndCaptions: [
        { path: "photography/KaiaSoul/KaiaSoul-1(wide).jpg", caption: "1", wide: false },
        { path: "photography/KaiaSoul/KaiaSoul-2(wide).jpg", caption: "1", wide: false },
        { path: "photography/KaiaSoul/KaiaSoul-3(wide).jpg", caption: "1", wide: false },
        { path: "photography/KaiaSoul/KaiaSoul-4(wide).jpg", caption: "1", wide: false },
        { path: "photography/KaiaSoul/KaiaSoul-5(wide).jpg", caption: "1", wide: false },
        { path: "photography/KaiaSoul/KaiaSoul-6(wide).jpg", caption: "1", wide: false },
        { path: "photography/KaiaSoul/KaiaSoul-7(wide).jpg", caption: "1", wide: false },
        { path: "photography/KaiaSoul/KaiaSoul-8(wide).jpg", caption: "1", wide: false },
      ],
    },
    
    {
      id: "card7",
      title: "Monet Cheung",
      
      mainImage: "photography/MonetCheung/Monet-36.jpg",
      className: "tall-card",
      imagesAndCaptions: [
        { path: "photography/MonetCheung/Monet-1.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-2.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-3.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-8.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-11.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-14.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-33.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-35.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-36.jpg", wide: false },

      ],
    },
    {
      id: "card8",
      title: "Kaimana Beach Hotel",
      
      mainImage: "photography/KaimanaBeachHotel/KaimanaBeachDigis-3.jpg",
      className: "wide-card",
      imagesAndCaptions: [
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-13.jpg", wide: true },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-2.jpg", wide: true },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-3.jpg", wide: false },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-4.jpg", wide: false },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-10.jpg", wide: false },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-11.jpg", wide: false },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-12.jpg", wide: false },
        
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-19.jpg", wide: false },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-31.jpg", wide: false },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-36.jpg", wide: false },
        { path: "photography/KaimanaBeachHotel/KaimanaBeachDigis-56.jpg", wide: false },
        
      ],
    },
    {
      id: "card9",
      title: "Nani Welch Keli'iho'omalu",
      subtitle: 'for M3N3HUN3',
      mainImage: "photography/MonetCheung/Monet-36.jpg",
      className: "tall-card",
      imagesAndCaptions: [
        { path: "photography/MonetCheung/Monet-1.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-2.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-3.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-8.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-11.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-14.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-33.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-35.jpg", wide: false },
        { path: "photography/MonetCheung/Monet-36.jpg", wide: false },

      ],
    },
  ];
  