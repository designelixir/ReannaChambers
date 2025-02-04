import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

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
      mainImage: "production/AndieSwim/",
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
        mainImage: "production/AsicsKayano/",
        description:
        <div className="flex-start-spacebetween full-width">
            <div>
                <p><strong>Production Team: </strong>Oak St Productions</p>
                <p><strong>Production Managers: </strong>Arielle Scheres, Clay Southerland</p>
                <p><strong>Production Coordinator &amp; Permitting: </strong>Reanna Chambers</p>
                <p><strong>Photography: </strong>David Salafia</p>
                <p><strong>Cinematography: </strong>Matt Heirakuji</p>
                <p><strong>Stylist: </strong>Lindsey Higa</p>
                <p><strong>HMU: </strong>Risa Hoshino</p>
            </div>
            <div className="flex-start-end full-width">
                <button className="white-button">Watch the Director's Cut</button>
            </div>
          
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="mason-grid">
          
        </div>
      },
    
  ];
  