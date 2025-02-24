import { ReactNode } from "react";
import VideoPlayer from "../components/VideoPlayer";
import Image from "next/image";

export interface ImageData {
  path: string;
  caption?: string;
  wide: boolean;
  ultraWide?: boolean;
}

export interface VideoData {
  id?: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  mainImage: string;
  className?: string;
  columnLayout?: ReactNode;
}
  
  export const videoCards: VideoData[] = [
{
    id: "card1",
    title: "Tech Noir Color Grade",
    mainImage: "video/TechNoir/TechNoir-1.jpg",
    description:
    <>
    <div className="flex-start-spacebetween" style={{marginBottom: '25px'}}>
      <div className="credits-section">
        <p><i>Presented by Vissla</i></p><br></br>
        <p>Starring Noa Mizuno &amp; Yubin Park </p>
        <p>Creative Direction by Christian Edwards</p>
        <p>Co-Directed by Noa Mizuno &amp; Koa San Luis</p>
        <p>Production by Malia Mizuno</p>
        <p>Coloring by Reanna Chambers</p>
        <p>Effects by Bryce Pedersen</p>
        <p>Production Assist by Robi</p>
      </div>
      <Image src="/video/TechNoir/TechNoir-2.jpg" width={330} height={400} alt="Marie Claire Cover"></Image>
    </div>
    <VideoPlayer src="https://www.youtube.com/watch?v=BrLG_rM67C8" youtube={true} classes="full-video"></VideoPlayer>
    </>,

    className: "wide-card",
    columnLayout:
    <>
   
    <div className="mason-grid margin-top">
    
    
    </div>
    </>
},  
{
    id: "card2",
    title: "Lo'ihi Records",
    mainImage: "video/LoihiRecords/TJTario.jpg",
    description:
    <>
    <div className="credits-section">
      <p><i>Single from T.J. Keanu Tario&apos;s album Standing Above the Clouds Lo&apos;ihi Records</i></p><br></br>
      <p>Vocals by Maka&apos;ala Perry</p>
      <p>Strings by Eric Silberger, Duane Padilla, and Joshua Nakazawa</p>
      <p>Piano by T.J. Keanu Tario</p>
      <p>Recorded by Gaylord Holomalia at Island Sound Studios</p>
      <p>Produced and Mixed by Dean Harada</p>
      <p>Photography/Filming/ Art Direction by Hema</p>
      <p>Video Edit and Coloring by Reanna Chambers</p>
      <br></br>
      <p>Featuring the &apos;ōpua typeface by CJ Type and Marika Higgins</p>
    </div>
    <VideoPlayer src="https://www.youtube.com/watch?v=L2N3txABdeU" youtube={true} classes="full-video"></VideoPlayer>
    </>,
    className: "wide-card",
    // columnLayout:
    // <div className="mason-grid margin-top">
    // <img src="video/LoihiRecords/" className="mason-2 mason-item" alt="Lo'ihi Records Photo"/>
    
    // </div>
},

  ];
  