import { ReactNode } from "react";
import VideoPlayer from "../components/VideoPlayer";

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
    <VideoPlayer src="https://www.youtube.com/watch?v=BrLG_rM67C8" youtube={true} classes="full-video"></VideoPlayer>
    </>,
    className: "wide-card",
    columnLayout:
    <div className="mason-grid margin-top">
    <img src="video/TechNoir/TechNoir-2.jpg" className="mason-2 mason-item" alt="Andie Swim 1"/>
    
    </div>
},  
{
    id: "card2",
    title: "Lo'ihi Records",
    mainImage: "video/LoihiRecords/",
    description:
    <>
    <VideoPlayer src="https://www.youtube.com/watch?v=L2N3txABdeU" youtube={true} classes="full-video"></VideoPlayer>
    </>,
    className: "wide-card",
    // columnLayout:
    // <div className="mason-grid margin-top">
    // <img src="video/LoihiRecords/" className="mason-2 mason-item" alt="Lo'ihi Records Photo"/>
    
    // </div>
},

  ];
  