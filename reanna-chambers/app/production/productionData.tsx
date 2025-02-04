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
      <div className="credits-section">
        <h3>Credits</h3>
        <p><strong>Photographer: </strong>Cece Alana</p>
        <p><strong>Stylist: </strong>Lindsey Higa</p>
        <p><strong>HMU: </strong>Risa Hoshino</p>
        <p><strong>Assists: </strong>Kiana Weight, Faith Jones</p>
      </div>,
      className: "tall-card",
      columnLayout:
      <div className="mason-grid margin-top">
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
            <div className="credits-section">
                <h3>Credits</h3>
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
        <div className="credits-section">
            <h3>Credits</h3>
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
    {
        id: "card5",
        title: "Kate Bosworth x Roxy Collection",
        mainImage: "production/KateBosworth/KateBosworth-4.jpg",
        description:
        <div className="credits-section">
        <h3>Credits</h3>
          <p><strong>Direction of Photography: </strong>Serena Lutton</p>
          <p><strong>Photographer: </strong>Tahnei Roy, Abby Oh, Alique Studio</p>
          <p><strong>Water Photographer: </strong> Beatriz Ryder</p>
          <p><strong>Styling: </strong>Lindsey Higa</p>
          <p><strong>Make-up Artist: </strong>Nathan Hejl using Chanel</p>
          <p><strong>Hair Stylist: </strong> Bridget Brager</p>
          <p><strong>Lighting Assistants: </strong>Henry Han, Vincent Rickafort, Digital Sundae</p>
          <p><strong>Digital Technician: </strong>Victor Demeester</p>
          <p><strong>Production: </strong>Reanna Chambers, Danielle Beck</p>
          <p><strong>Video Editing: </strong>Katie McDonald, David Bamford</p>
          <p><strong>Make-up Assistant: </strong>Kate Broadhurst</p>
          <p><strong>Athletes: </strong> Lisa Andersen, Kelia Moniz, Stephanie Gilmore, Bettylou Sakura Johnson, Maluhia Kinimaka, Izzi Gomez  Suelen Naraisa</p>
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="flex-start-start flex-column" style={{marginTop: '50px'}}>
            <VideoPlayer youtube={true} classes="full-video" src="https://www.youtube.com/watch?v=J3qdoKINi_4"></VideoPlayer>
            <h3>Photos</h3>
            <div className="mason-grid margin-top">
                <p style={{color: 'red'}}>Left a note - this needs to have the photos narrowed down! </p>
                {/* <img src="production/KateBosworth/KateBosworth-1.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 1"/> */}
                
            </div>
        </div>
    },
    {
        id: "card6",
        title: "Kelia Moniz",
        subtitle: 'Activewear Collections',
        mainImage: "production/KeliaMoniz/KeliaMoniz-12.jpg",
        description:
        <div className="credits-section">
            <h3>Credits</h3>
            <p><strong>Cinematography: </strong>Matt Heirakuji</p>
            <p><strong>Photography: </strong>Joe Termini</p>
            <p><strong>HMU: </strong>Jonah Face</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="flex-start-start flex-column" style={{marginTop: '50px'}}>
            <VideoPlayer youtube={true} classes="full-video" src="https://www.youtube.com/watch?v=kIgoo0FMC-U"></VideoPlayer>
            <h3>Photos</h3>
            <div className="mason-grid margin-top">
                <p style={{color: 'red'}}>Left a note - this needs to have the photos narrowed down! </p>
                {/* <img src="production/KateBosworth/KateBosworth-1.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 1"/> */}
                
            </div>
        </div>
    },
    {
        id: "card7",
        title: "Last Light",
        subtitle: 'Short Film',
        mainImage: "production/LastLight/LastLight-4.jpg",
        description:
        <div className="flex-start-spacebetween">
            <div className="credits-section">
                <h3>Credits</h3>
                <p><strong>Director: </strong>Koa Bayani</p>
                <p><strong>Producers: </strong>Malia Mizuno, Reanna Chambers, Wainani Young Tomich</p>
                <p><strong>Writer: </strong>Koa Bayani</p>
                <p><strong>Starring: </strong>Kalama Epstein, Kennedy King, Diego Ferri, Koa San Luis</p>
                <p><strong>Cinematographer: </strong>Abraham Williams</p>
            </div>
            <div className="flex-end-end flex-column full-width credits-section">
                <h3 style={{width: '120px'}}>Awards</h3>
                <div className="flex-center-center">
                    <Link href="https://hiff.org/events/lastlight/" className="hover">
                        <Image src="/production/HawaiiFilmFestivalSelection.png" height={80} width={100} alt="2024 Hawai'i Film Festival Official Selection"></Image>
                    </Link>
                    <Link href="https://www.sohofilmfest.com/2024-winners---nominees.html" className="hover">
                    <Image src="/production/sohoFilmFestivalSelection.png" height={70} width={100} alt="2024 SOHO International Film Festival Official Selection"></Image>
                    </Link>
                    
                </div>
                
            </div>
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="flex-start-start flex-column">
            <h3>BTS Photos by Cole Turner and Reanna Chambers</h3>
            <div className="mason-grid margin-top">
                <img src="production/LastLight/LastLight-8.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 8"/>
                <div className="mason-inner-container">
                    <div className="mason-50-container">
                        <img src="production/LastLight/LastLight-7.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 7"/>
                        <img src="production/LastLight/LastLight-1.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 1"/>
                        <img src="production/LastLight/LastLight-2.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 2"/>
                        <img src="production/LastLight/LastLight-3.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 3"/>
                        
                    </div>
                    <div className="mason-50-container">
                        <img src="production/LastLight/LastLight-5.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 5"/>
                        <img src="production/LastLight/LastLight-6.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 6"/>
                        <img src="production/LastLight/LastLight-9.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 9"/>
                        <img src="production/LastLight/LastLight-4.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 4"/>
                    </div>
                </div>
            </div>
        </div>
    },
    {
        id: "card8",
        title: "Lisa Andersen",
        subtitle: 'Roxy Collection',
        mainImage: "production/LisaAndersen/LisaAndersen-9.jpg",
        description:
        <div className="credits-section">
            <h3>Credits</h3>
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Cinematography: </strong>Roxy Facer</p>
            <p><strong>Assists: </strong>Kiana Weight, Simeon Ke-Paloma</p>
            <p><strong>Atheletes: </strong>Megan Godinez, Kelia Moniz, Lisa Andersen, Bettylou Sakura Johnson, Bruna Zuan, Monyca Eleogram, Kelis Kaleopa'a, Coral Sallas </p>
            <p><strong>Models: </strong>Malia Kaleopa'a, Tiara Hernandez, Bri Atisone</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid margin-top">
            <img src="production/LisaAndersen/LisaAndersen-10.jpg" className="mason-1 mason-item" alt="Lisa Andersen Photo 10"/>
            <img src="production/LisaAndersen/LisaAndersen-1.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 1"/>
            <img src="production/LisaAndersen/LisaAndersen-2.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 2"/>
            <img src="production/LisaAndersen/LisaAndersen-3.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 3"/>
            <img src="production/LisaAndersen/LisaAndersen-4.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 4"/>
            <img src="production/LisaAndersen/LisaAndersen-5.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 5"/>
            <img src="production/LisaAndersen/LisaAndersen-6.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 6"/>
            <img src="production/LisaAndersen/LisaAndersen-8.jpg" className="mason-1 mason-item" alt="Lisa Andersen Photo 8"/>
            <img src="production/LisaAndersen/LisaAndersen-7.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 7"/>
            <img src="production/LisaAndersen/LisaAndersen-9.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 9"/>
            <img src="production/LisaAndersen/LisaAndersen-11.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 11"/>
            <img src="production/LisaAndersen/LisaAndersen-12.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 12"/>
            <img src="production/LisaAndersen/LisaAndersen-13.jpg" className="mason-1 mason-item" alt="Lisa Andersen Photo 13"/>
        </div>
    },
    {
        id: "card9",
        title: "Manachrome Wetplate Photography",
        mainImage: "production/Manachrome/TheMizunos.jpg",
        description:
        <div>
            <p>Collodian Wet-Plate Photography by Kenyatta Kelechi</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid margin-top">
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Alika.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Alika"/>
                <div className="caption">
                    <p>Alika</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/BuffaloKeaulana.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Buffalo Keaulana"/>
                <div className="caption">
                    <p>Buffalo Keaulana</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Mainei.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Mainei"/>
                <div className="caption">
                    <p>Mainei</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Mainei&Alika.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Mainei & Alika"/>
                <div className="caption">
                    <p>Mainei &amp; Alika</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Noa&Sean.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Noa & Sean"/>
                <div className="caption">
                    <p>Noa &amp; Sean</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Tati&Emiri.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Tati and Emiri"/>
                <div className="caption">
                    <p>Tati &amp; Emiri</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheFukumitsus.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Fukumitsus"/>
                <div className="caption">
                    <p>The Fukumitsus</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheKahalewais.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Kahalewais"/>
                <div className="caption">
                    <p>The Kahalewais</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheMizunos.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Mizunos"/>
                <div className="caption">
                    <p>The Mizunos</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheMonizFamily.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Moniz Family"/>
                <div className="caption">
                    <p>The Moniz Family</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheWehners.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Wehners"/>
                <div className="caption">
                    <p>The Wehners</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheWiggins.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Wiggins"/>
                <div className="caption">
                    <p>The Wiggins</p>
                </div>
            </div>
            
        </div>
    },
    {
        id: "card10",
        title: "Marie Claire",
        subtitle: 'United Kingdom',
        mainImage: "production/MarieClaire/MarieClaire-4.jpg",
        description:
        <div className="flex-start-spacebetween break-950">
            <div className="credits-section">
                <h3>Credits</h3>
                <p><strong>Director of Photography and Photographer: </strong>Serena Lutton</p>
                <p><strong>Editor in Chief: </strong>Andrea Thompson</p>
                <p><strong>Shoot and Film Director: </strong>Lisa Oxenham</p>
                <p><strong>Writer: </strong>Sophie Goddard</p>
                <p><strong>Senior Art Editor: </strong>Ana Ospina</p>
                <p><strong>Chief Sub-Editor: </strong>Nicola Moyne</p>
                <p><strong>Producer: </strong>Sofia Pizah</p>
                <p><strong>Videographer: </strong>Katherine Goguen</p>
                <p><strong>Water Videographer: </strong>Henry Michaelis</p>
                <p><strong>Water Photographer: </strong>Beatriz Ryder</p>
                <p><strong>Styling: </strong>Lindsey Higa</p>
                <p><strong>Make-up Artist: </strong>Nathan Hejl using Chanel</p>
                <p><strong>Hair Stylist: </strong>Bridget Brager</p>
                <p><strong>Lighting Assistants: </strong>Henry Han, Vincent Rickafort, Digital Sundae</p>
                <p><strong>Digital Technician: </strong>Victor Demeester</p>
                <p><strong>Production: </strong>Reanna Chambers, Danielle Beck</p>
                <p><strong>Video Editing: </strong>Katie Mcdonald, David Bamford</p>
                <p><strong>Make-up Assistant: </strong>Kate Broadhurst</p>
                <p><strong>Athletes: </strong>Maluhia Kinimaka, Izzi Gomez, Suelen Naraisa</p>
            </div>
            <div className="credits-section break-950-children">
                <Link href="https://www.marieclaire.co.uk/digital-covers/kate-bosworth" target="_blank" className="hover no-link-styling black-text">
                    <h3>Read the Article</h3>
                    <Image src="/production/MarieClaire/MC_KB_Cover.jpg" className="hover" width={330} height={400} alt="Marie Claire Cover"></Image>
                </Link>
            </div>
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="flex-start-start flex-column margin-top">
            <h3>Behind the Scenes</h3>
            <div className="mason-grid">
                <img src="production/MarieClaire/MarieClaire-BTS-1.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 1"/>
                <div className="mason-inner-container">
                    <div className="mason-50-container">
                        <img src="production/MarieClaire/MarieClaire-BTS-2.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 2"/>
                        <img src="production/MarieClaire/MarieClaire-BTS-5.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 5"/>
                        <img src="production/MarieClaire/MarieClaire-BTS-6.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 6"/>
                    </div>
                    <div className="mason-50-container">
                        <img src="production/MarieClaire/MarieClaire-BTS-3.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 3"/>
                        <img src="production/MarieClaire/MarieClaire-BTS-4.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 4"/>
                        <img src="production/MarieClaire/MarieClaire-BTS-10.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 10"/>
                    </div>
                </div>
                <img src="production/MarieClaire/MarieClaire-BTS-7.jpg" className="mason-2 mason-item" alt="Marie Claire BTS Photo 7"/>
                <img src="production/MarieClaire/MarieClaire-BTS-8.jpg" className="mason-2 mason-item" alt="Marie Claire BTS Photo 8"/>
                <img src="production/MarieClaire/MarieClaire-BTS-9.jpg" className="mason-2 mason-item" alt="Marie Claire BTS Photo 9"/>
                <img src="production/MarieClaire/MarieClaire-BTS-11.jpg" className="mason-2 mason-item" alt="Marie Claire BTS Photo 11"/>
                
                <img src="production/MarieClaire/MarieClaire-BTS-12.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 12"/>
                <img src="production/MarieClaire/MarieClaire-BTS-14.jpg" className="mason-2 mason-item" alt="Marie Claire BTS Photo 14"/>
                <img src="production/MarieClaire/MarieClaire-BTS-13.jpg" className="mason-2 mason-item" alt="Marie Claire BTS Photo 13"/>

                
            </div>
        </div>
    },
    {
        id: "card11",
        title: "Roxy",
        subtitle: 'Hawaiian Heat Collection',
        mainImage: "production/RoxyHawaiianHeat/RoxyHawaiianHeat-14.jpg",
        description:
        <div className="credits-section">
            <h3>Credits</h3>
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Cinematography: </strong>Roxy Facer</p>
            <p><strong>Assists: </strong>Malia Mizuno</p>
            <p><strong>Athletes: </strong>Megan Godinez, Kelia Moniz, Monyca Eleogram, Kelis Kaleopa&apos;a</p>
            <p><strong>Models: </strong>Malia Kaleopa&apos;a, Tiara Hernandez, Bri Atisone</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <p style={{color: 'red'}}>Left a note - please narrow down photos for this gallery!</p>
            {/* <img src="production/MarieClaire/MarieClaire-BTS-1.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 1"/> */}
        </div>
        
    },
    {
        id: "card12",
        title: "Roxy",
        subtitle: `Holiday '24`,
        mainImage: "production/RoxyHoliday24/RoxyHoliday24-1.jpg",
        description:
        <div className="credits-section">
            <h3>Credits</h3>
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Assists: </strong>Malia Mizuno, Xavier Jay</p>
            <p><strong>Athletes: </strong>Kelis Kaleopa&apos;a, Maluhia Kinimaka</p>
            <p><strong>Model: </strong>Tiara Hernandez</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <p style={{color: 'red'}}>Left a note - please narrow down photos for this gallery!</p>
            {/* <img src="production/MarieClaire/MarieClaire-BTS-1.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 1"/> */}
        </div>
        
    },
    
  ];
  