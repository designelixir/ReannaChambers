import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import VideoPlayer from "../components/VideoPlayer";

export interface ImageData {
  path: string;
  caption?: string;
  wide: boolean;
  ultraWide?: boolean;
}

export interface ProductionData {
  id?: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  mainImage: string;
  className?: string;
  columnLayout?: ReactNode;
}
  
  export const productionCards: ProductionData[] = [
    {
      id: "card1",
      title: "Andie Swim",
      mainImage: "production/AndieSwim/AndieSwim-1.jpg",
      description:
      <div>
        <p><strong>Photographer: </strong>Cece Alana</p>
        <p><strong>Stylist: </strong>Lindsey Higa</p>
        <p><strong>HMU: </strong>Risa Hoshino</p>
        <p><strong>Assists: </strong>Kiana Weight, Faith Jones</p>
      </div>,
      className: "tall-card",
      columnLayout:
      <div className="mason-grid">
        <img src="production/AndieSwim/AndieSwim-1.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 1"/>
        <img src="production/AndieSwim/AndieSwim-8.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 8"/>
        <img src="production/AndieSwim/AndieSwim-14.jpg" className="mason-1 mason-item" alt="Avva Brand Photo 14"/>
        <img src="production/AndieSwim/AndieSwim-6.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 6"/>
        <img src="production/AndieSwim/AndieSwim-3.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 3"/>
        <img src="production/AndieSwim/AndieSwim-4.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 4"/>
        <img src="production/AndieSwim/AndieSwim-5.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 5"/>
        <img src="production/AndieSwim/AndieSwim-2.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 2"/>
        <img src="production/AndieSwim/AndieSwim-7.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 7"/>
        <img src="production/AndieSwim/AndieSwim-9.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 9"/>
        <img src="production/AndieSwim/AndieSwim-10.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 10"/>
        <img src="production/AndieSwim/AndieSwim-11.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 11"/>
        <img src="production/AndieSwim/AndieSwim-12.jpg" className="mason-2 mason-item" alt="Avva Brand Photo 12"/>
        <img src="production/AndieSwim/AndieSwim-13.jpg" className="mason-1 mason-item" alt="Avva Brand Photo 13"/>
      </div>
    },
    {
        id: "card2",
        title: "ASICS Kayano 30 + Anniversary",
        mainImage: "production/AsicsKayano/ASICSKayano-2.jpg",
        description:
        <div className="flex-start-start flex-column full-width">
            <div>
                <p><strong>Production Team: </strong>Oak St Productions</p>
                <p><strong>Production Managers: </strong>Arielle Scheres, Clay Southerland</p>
                <p><strong>Production Coordinator &amp; Permitting: </strong>Reanna Chambers</p>
                <p><strong>Photography: </strong>David Salafia</p>
                <p><strong>Cinematography: </strong>Matt Heirakuji</p>
                <p><strong>Stylist: </strong>Lindsey Higa</p>
                <p><strong>HMU: </strong>Risa Hoshino</p>
            </div>
            <div className="video-container flex-start-start margin-top flex-wrap">
                <div className="video-wrapper">
                    <VideoPlayer youtube={true} classes="half-video" src="https://www.youtube.com/watch?v=tUC7JuymNgQ"></VideoPlayer>    
                    <div className="caption"><p>View the production</p></div>
                </div>
                <div className="video-wrapper">
                    <VideoPlayer vimeo={true} classes="half-video" src="https://vimeo.com/842024523"></VideoPlayer>    
                    <div className="caption"><p>Matt Heirakuji Director&apos;s Cut</p></div>
                </div>
            </div>
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="flex-start-start flex-column">
            <h3>Photos</h3>
            <div className="mason-grid margin-top">
                <img src="production/AsicsKayano/ASICSKayano-6.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 6"/>
                <img src="production/AsicsKayano/ASICSKayano-1.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 1"/>
                <img src="production/AsicsKayano/ASICSKayano-2.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 2"/>
                <img src="production/AsicsKayano/ASICSKayano-3.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 3"/>
                <img src="production/AsicsKayano/ASICSKayano-28.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 28"/>
                
                <img src="production/AsicsKayano/ASICSKayano-4.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 4"/>
                <img src="production/AsicsKayano/ASICSKayano-5.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 5"/>
                <img src="production/AsicsKayano/ASICSKayano-8.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 8"/>
                <img src="production/AsicsKayano/ASICSKayano-7.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 7"/>
                
                <img src="production/AsicsKayano/ASICSKayano-9.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 9"/>
                <img src="production/AsicsKayano/ASICSKayano-10.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 10"/>
                <img src="production/AsicsKayano/ASICSKayano-19.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 19"/>
                <div className="mason-inner-container">
                    <div className="mason-50-container">
                        <img src="production/AsicsKayano/ASICSKayano-11.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 11"/>
                        <img src="production/AsicsKayano/ASICSKayano-14.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 14"/>
                        <img src="production/AsicsKayano/ASICSKayano-15.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 15"/>
                        <img src="production/AsicsKayano/ASICSKayano-16.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 16"/>
                        <img src="production/AsicsKayano/ASICSKayano-18.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 18"/>
                        <img src="production/AsicsKayano/ASICSKayano-20.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 20"/>
                        <img src="production/AsicsKayano/ASICSKayano-26.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 26"/>
                        <img src="production/AsicsKayano/ASICSKayano-23.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 23"/>
                    </div>
                    <div className="mason-50-container">
                        <img src="production/AsicsKayano/ASICSKayano-12.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 12"/>
                        <img src="production/AsicsKayano/ASICSKayano-13.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 13"/>
                        <img src="production/AsicsKayano/ASICSKayano-17.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 17"/>        
                        <img src="production/AsicsKayano/ASICSKayano-27.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 27"/>
                        <img src="production/AsicsKayano/ASICSKayano-29.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 29"/>
                        <img src="production/AsicsKayano/ASICSKayano-30.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 30"/>
                        <img src="production/AsicsKayano/ASICSKayano-21.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 21"/>
                        <img src="production/AsicsKayano/ASICSKayano-22.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 22"/>
                        <img src="production/AsicsKayano/ASICSKayano-24.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 24"/>
                        <img src="production/AsicsKayano/ASICSKayano-25.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 25"/>
                    </div>
                </div>
            </div>
        </div>
    },
    {
        id: "card3",
        title: "Honolulu Pawn Shop",
        mainImage: "production/HonoluluPawn/HonoluluPawn.jpg",
        description:
        <div>
          <p><strong>Cinematographer: </strong>Matt Heirakuji</p>
          <p><strong>Photographer: </strong>Joe Termini</p>
          <p><strong>Producer: </strong>Reanna Chambers</p>
          <p><strong>Creative Director: </strong>Kelia Moniz</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div style={{marginTop: '50px'}}>
            <VideoPlayer youtube={true} classes="full-video" src="https://youtu.be/coZqPryKVj8?si=IfysAbmMbmkywaAl"></VideoPlayer>
        </div>
    },
    {
        id: "card4",
        title: "Jams World x Rowing Blazers '23",
        mainImage: "production/JamsWorld/JamsWorld-1.jpg",
        description:
        <div>
          <p>Photography and Cinematography by Roxy Facer</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid margin-top">
            <img src="production/JamsWorld/JamsWorld-2.jpg" className="mason-1 mason-item" alt="Jams World Photo 2"/>
            
            
            <img src="production/JamsWorld/JamsWorld-3.jpg" className="mason-2 mason-item" alt="Jams World Photo 3"/>
            <img src="production/JamsWorld/JamsWorld-4.jpg" className="mason-2 mason-item" alt="Jams World Photo 4"/>
            <img src="production/JamsWorld/JamsWorld-5.jpg" className="mason-2 mason-item" alt="Jams World Photo 5"/>
            <img src="production/JamsWorld/JamsWorld-6.jpg" className="mason-2 mason-item" alt="Jams World Photo 6"/>
            
            <img src="production/JamsWorld/JamsWorld-1.jpg" className="mason-1 mason-item" alt="Jams World Photo 1"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                    <img src="production/JamsWorld/JamsWorld-7.jpg" className="mason-1 mason-item" alt="Jams World Photo 7"/>
                    <img src="production/JamsWorld/JamsWorld-10.jpg" className="mason-1 mason-item" alt="Jams World Photo 10"/>
                    <img src="production/JamsWorld/JamsWorld-11.jpg" className="mason-1 mason-item" alt="Jams World Photo 11"/>
                    
                </div>
                <div className="mason-50-container">
                    <img src="production/JamsWorld/JamsWorld-8.jpg" className="mason-1 mason-item" alt="Jams World Photo 8"/>
                    <img src="production/JamsWorld/JamsWorld-9.jpg" className="mason-1 mason-item" alt="Jams World Photo 9"/>
                    <img src="production/JamsWorld/JamsWorld-12.jpg" className="mason-1 mason-item" alt="Jams World Photo 12"/>
                </div>
            </div>
        </div>
    },
    
  ];
  