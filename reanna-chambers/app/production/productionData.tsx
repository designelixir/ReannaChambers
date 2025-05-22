import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";
import { ProjectData } from "../components/Cards/ProjectCard";

  
  export const productionCards: ProjectData[] = [
    
{
    id: "card1",
    title: "Andie Swim",
    mainImage: "production/AndieSwim/AndieSwim-1.jpg",
    description:
    <div className="credits-section">
    <p><strong>Photographer: </strong>Cece Alana</p>
    <p><strong>Production: </strong>Reanna Chambers</p>
    <p><strong>Stylist: </strong>Lindsey Higa</p>
    <p><strong>Hair and Makeup: </strong>Risa Hoshino</p>
    <p><strong>Assists: </strong>Kiana Weight, Faith Jones</p>
    <p><strong>Models: </strong>Naya Gause, Sydney Malia Walker</p>
    
    </div>,
    className: "tall-card",
    columnLayout:
    <div className="mason-grid margin-top">
    <img src="production/AndieSwim/AndieSwim-1.jpg" className="mason-2 mason-item" alt="Andie Swim 1"/>
    <img src="production/AndieSwim/AndieSwim-8.JPG" className="mason-2 mason-item" alt="Andie Swim 8"/>
    <img src="production/AndieSwim/AndieSwim-14.JPG" className="mason-1 mason-item" alt="Andie Swim 14"/>
    <img src="production/AndieSwim/AndieSwim-6.JPG" className="mason-2 mason-item" alt="Andie Swim 6"/>
    <img src="production/AndieSwim/AndieSwim-3.JPG" className="mason-2 mason-item" alt="Andie Swim 3"/>
    <img src="production/AndieSwim/AndieSwim-4.JPG" className="mason-2 mason-item" alt="Andie Swim 4"/>
    <img src="production/AndieSwim/AndieSwim-5.jpg" className="mason-2 mason-item" alt="Andie Swim 5"/>
    <img src="production/AndieSwim/AndieSwim-2.jpg" className="mason-2 mason-item" alt="Andie Swim 2"/>
    <img src="production/AndieSwim/AndieSwim-7.JPG" className="mason-2 mason-item" alt="Andie Swim 7"/>
    <img src="production/AndieSwim/AndieSwim-9.jpg" className="mason-2 mason-item" alt="Andie Swim 9"/>
    <img src="production/AndieSwim/AndieSwim-10.JPG" className="mason-2 mason-item" alt="Andie Swim 10"/>
    <img src="production/AndieSwim/AndieSwim-11.JPG" className="mason-2 mason-item" alt="Andie Swim 11"/>
    <img src="production/AndieSwim/AndieSwim-12.JPG" className="mason-2 mason-item" alt="Andie Swim 12"/>
    <img src="production/AndieSwim/AndieSwim-13.jpg" className="mason-1 mason-item" alt="Andie Swim 13"/>
    <img src="production/AndieSwim/AndieSwim-15.JPG" className="mason-1 mason-item" alt="Andie Swim 15"/>
    </div>
},
{
    id: "card2",
    title: "ASICS",
    mainImage: "production/AsicsKayano/ASICSKayano-15.jpg",
    description:
    <div className="flex-start-start flex-column full-width">
        <div className="credits-section">
            <p><strong>Production Team: </strong>Oak St Productions</p>
            <p><strong>Line Producer: </strong>Michaela Eichenbaum</p>
            <p><strong>Production Managers: </strong>Arielle Scheres, Clay Southerland</p>
            <p><strong>Production Coordinator &amp; Permitting: </strong>Reanna Chambers</p>
            <p><strong>Photography: </strong>David Salafia</p>
            <p><strong>Cinematography: </strong>Matt Heirakuji</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Stylist: </strong>Lindsey Higa</p>
            <p><strong>Hair and Makeup: </strong>Risa Hoshino</p>
        </div>
        <div className="video-container flex-start-start margin-top flex-wrap">
            <div className="video-wrapper" >
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
        <div className="mason-grid margin-top">
        <div className="mason-inner-container">
        <div className="mason-50-container">
            <img src="production/AsicsKayano/ASICSKayano-25.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 25"/>
            <img src="production/AsicsKayano/ASICSKayano-24.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 24"/>
            <img src="production/AsicsKayano/ASICSKayano-22.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 22"/>
            <img src="production/AsicsKayano/ASICSKayano-21.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 21"/>
            <img src="production/AsicsKayano/ASICSKayano-30.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 30"/>
            <img src="production/AsicsKayano/ASICSKayano-29.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 29"/>
            <img src="production/AsicsKayano/ASICSKayano-27.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 27"/>
            <img src="production/AsicsKayano/ASICSKayano-17.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 17"/>   
            <img src="production/AsicsKayano/ASICSKayano-13.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 13"/>
            <img src="production/AsicsKayano/ASICSKayano-12.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 12"/>
        </div>
        <div className="mason-50-container">
        <img src="production/AsicsKayano/ASICSKayano-23.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 23"/>
        <img src="production/AsicsKayano/ASICSKayano-26.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 26"/>
        <img src="production/AsicsKayano/ASICSKayano-20.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 20"/>
        <img src="production/AsicsKayano/ASICSKayano-18.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 18"/>
        <img src="production/AsicsKayano/ASICSKayano-16.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 16"/>
        <img src="production/AsicsKayano/ASICSKayano-15.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 15"/>
        <img src="production/AsicsKayano/ASICSKayano-14.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 14"/>
        <img src="production/AsicsKayano/ASICSKayano-11.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 11"/>
        </div>
        </div>
        <img src="production/AsicsKayano/ASICSKayano-19.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 19"/>
        <img src="production/AsicsKayano/ASICSKayano-10.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 10"/>
        <img src="production/AsicsKayano/ASICSKayano-9.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 9"/>
        <img src="production/AsicsKayano/ASICSKayano-7.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 7"/>
        <img src="production/AsicsKayano/ASICSKayano-8.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 8"/>
        <img src="production/AsicsKayano/ASICSKayano-5.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 5"/>
        <img src="production/AsicsKayano/ASICSKayano-4.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 4"/>
        <img src="production/AsicsKayano/ASICSKayano-28.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 28"/>
        <img src="production/AsicsKayano/ASICSKayano-3.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 3"/>
        <img src="production/AsicsKayano/ASICSKayano-2.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 2"/>
        <img src="production/AsicsKayano/ASICSKayano-1.jpg" className="mason-2 mason-item" alt="ASICS Kayano Photo 1"/>
        <img src="production/AsicsKayano/ASICSKayano-6.jpg" className="mason-1 mason-item" alt="ASICS Kayano Photo 6"/>
        </div>
    </div>
},
    {
        id: "card3",
        title: "Honolulu Pawn Shop",
        mainImage: "production/HonoluluPawn/HonoluluPawn.jpg",
        description:
        <div className="credits-section">
            <p><strong>Cinematographer: </strong>Matt Heirakuji</p>
            <p><strong>Photographer: </strong>Joe Termini</p>
            <p><strong>Producer: </strong>Reanna Chambers</p>
            <p><strong>Creative Direction: </strong>Kelia Moniz</p>
            <p><strong>Styling/Assist: </strong>Grace Lacio</p>
            <div style={{marginTop: '25px'}}>
                <VideoPlayer youtube={true} classes="full-video" src="https://www.youtube.com/watch?v=coZqPryKVj8"></VideoPlayer>
            </div>
        </div>,
        className: "tall-card",
        columnLayout:
        <>
            
        </>
        
    },
    {
        id: "card4",
        title: "Jams World x Rowing Blazers",
        mainImage: "production/JamsWorld/JamsWorld-1.jpg",
        description:
        <div className="credits-section">
          <p><strong>Photography / Cinematography: </strong>Roxy Facer</p>
          <p><strong>Production: </strong>Reanna Chambers</p>
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
        title: "Kate Bosworth x Roxy",
        mainImage: "production/KateBosworth/KateBosworth-5.jpg",
        description:
        <div className="credits-section">
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
                <div className="mason-inner-container">
                    <div className="mason-50-container">
                    <img src="production/KateBosworth/KateBosworth-2.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 2"/>
                    <img src="production/KateBosworth/KateBosworth-5.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 5"/>
                    <img src="production/KateBosworth/KateBosworth-13.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 13"/>
                    <img src="production/KateBosworth/KateBosworth-17.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 17"/>
                    <img src="production/KateBosworth/KateBosworth-33.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 33"/>
                    </div>
                    <div className="mason-50-container">
                    <img src="production/KateBosworth/KateBosworth-4.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 4"/>
                    <img src="production/KateBosworth/KateBosworth-6.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 6"/>
                    <img src="production/KateBosworth/KateBosworth-9.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 9"/>
                    <img src="production/KateBosworth/KateBosworth-14.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 14"/>
                    </div>
                </div>
                <img src="production/KateBosworth/KateBosworth-39.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 39"/>
                
                <img src="production/KateBosworth/KateBosworth-25.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 25"/>
                <img src="production/KateBosworth/KateBosworth-26.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 26"/>
                <img src="production/KateBosworth/KateBosworth-32.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 32"/>
                
                <img src="production/KateBosworth/KateBosworth-36.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 36"/>
                
                <img src="production/KateBosworth/KateBosworth-41.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 41"/>
                <img src="production/KateBosworth/KateBosworth-42.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 42"/>
                <img src="production/KateBosworth/KateBosworth-43.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 43"/>
                <img src="production/KateBosworth/KateBosworth-45.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 45"/>
                <img src="production/KateBosworth/KateBosworth-46.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 46"/>
                <img src="production/KateBosworth/KateBosworth-47.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 47"/>
                <img src="production/KateBosworth/KateBosworth-49.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 49"/>
                <img src="production/KateBosworth/KateBosworth-51.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 51"/>
                <img src="production/KateBosworth/KateBosworth-52.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 52"/>
                <img src="production/KateBosworth/KateBosworth-53.jpg" className="mason-2 mason-item" alt="Kate Bosworth X Roxy Photo 53"/>
                <div className="mason-inner-container">
                    <div className="mason-50-container">
                        <img src="production/KateBosworth/KateBosworth-55.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 55"/>
                        <img src="production/KateBosworth/KateBosworth-63.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 63"/>
                    </div>
                    <div className="mason-50-container">
                    <img src="production/KateBosworth/KateBosworth-62.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 62"/>
                    <img src="production/KateBosworth/KateBosworth-64.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 64"/>
                    </div>
                </div>
                <img src="production/KateBosworth/KateBosworth-66.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 66"/>
                <img src="production/KateBosworth/KateBosworth-56.jpg" className="mason-1 mason-item" alt="Kate Bosworth X Roxy Photo 56"/>
            </div>
        </div>
    },
    {
        id: "card6",
        title: "Kelia Moniz",
        subtitle: `Active Collections`,
        mainImage: "production/KeliaMoniz/KeliaMoniz-40.jpg",
        description:
        <div className="credits-section">
            <p><strong>Cinematography: </strong>Matt Heirakuji</p>
            <p><strong>Photography: </strong>Joe Termini</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Creative Direction: </strong>Kelia Moniz</p>
            <p><strong>Lighting: </strong>Huey Tran, Mikel Sodini</p>
            <p><strong>Hair and Makeup: </strong>Jonah Face</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="flex-start-start flex-column" style={{marginTop: '50px'}}>
            <VideoPlayer youtube={true} classes="full-video" src="https://www.youtube.com/watch?v=kIgoo0FMC-U"></VideoPlayer>
            
            <div className="mason-grid margin-top">
  <img src="production/KeliaMoniz/KeliaMoniz-51.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 51"/>

  <div className="mason-inner-container">
    <div className="mason-50-container">
      <img src="production/KeliaMoniz/KeliaMoniz-49.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 49"/>
      <img src="production/KeliaMoniz/KeliaMoniz-45.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 45"/>
      <img src="production/KeliaMoniz/KeliaMoniz-43.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 43"/>
    </div>
    <div className="mason-50-container">
      <img src="production/KeliaMoniz/KeliaMoniz-50.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 50"/>
      <img src="production/KeliaMoniz/KeliaMoniz-48.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 48"/>
      <img src="production/KeliaMoniz/KeliaMoniz-42.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 42"/>
    </div>
  </div>

  <img src="production/KeliaMoniz/KeliaMoniz-40.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 40"/>

  <div className="mason-inner-container">
    <div className="mason-50-container">
      <img src="production/KeliaMoniz/KeliaMoniz-39.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 39"/>
      <img src="production/KeliaMoniz/KeliaMoniz-32.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 32"/>
      <img src="production/KeliaMoniz/KeliaMoniz-31.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 31"/>
      <img src="production/KeliaMoniz/KeliaMoniz-34.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 34"/>
      <img src="production/KeliaMoniz/KeliaMoniz-24.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 24"/>
      <img src="production/KeliaMoniz/KeliaMoniz-21.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 21"/>
      <img src="production/KeliaMoniz/KeliaMoniz-19.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 19"/>
      <img src="production/KeliaMoniz/KeliaMoniz-28.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 28"/>
    </div>
    <div className="mason-50-container">
      <img src="production/KeliaMoniz/KeliaMoniz-33.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 33"/>
      <img src="production/KeliaMoniz/KeliaMoniz-38.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 38"/>
      <img src="production/KeliaMoniz/KeliaMoniz-35.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 35"/>
      <img src="production/KeliaMoniz/KeliaMoniz-30.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 30"/>
      <img src="production/KeliaMoniz/KeliaMoniz-23.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 23"/>
      <img src="production/KeliaMoniz/KeliaMoniz-26.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 26"/>
      <img src="production/KeliaMoniz/KeliaMoniz-17.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 17"/>
      <img src="production/KeliaMoniz/KeliaMoniz-14.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 14"/>
    </div>
  </div>

  <div className="mason-inner-container">
    <div className="mason-50-container">
      <img src="production/KeliaMoniz/KeliaMoniz-11.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 11"/>
      <img src="production/KeliaMoniz/KeliaMoniz-4.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 4"/>
    </div>
    <div className="mason-50-container">
      <img src="production/KeliaMoniz/KeliaMoniz-8.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 8"/>
      <img src="production/KeliaMoniz/KeliaMoniz-3.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 3"/>
    </div>
  </div>

  <img src="production/KeliaMoniz/KeliaMoniz-10.jpg" className="mason-1 mason-item" alt="Kelia Moniz Photo 10"/>
</div>

        </div>
    },
    {
        id: "card7",
        title: "Last Light",
        subtitle: 'Short Film',
        mainImage: "production/LastLight/LastLight-1.jpg",
        description:
        <div className="flex-start-start flex-column">
            <div className="credits-section">
                
                <p><strong>Director: </strong>Koa Bayani</p>
                <p><strong>Producers: </strong>Malia Mizuno, Reanna Chambers, Wainani Young Tomich</p>
                <p><strong>Writer: </strong>Koa Bayani</p>
                <p><strong>Starring: </strong>Kalama Epstein, Kennedy King, Diego Ferri, Koa San Luis</p>
                <p><strong>Cinematographer: </strong>Abraham Williams</p>
                
            </div>
            <div className="flex-start-start flex-column full-width credits-section" style={{marginTop: '25px'}}>
                <div className="flex-start-start">
                    <Link target="_blank" href="https://hiff.org/events/lastlight/" className="hover flex-center-center flex-column no-link-styling black-text ">
                        <Image src="/production/HawaiiFilmFestivalSelection.png" height={80} width={100} alt="2024 Hawai'i Film Festival Official Selection"></Image>
                        <p className="modern-font xs-text">Nominee</p>
                    </Link>
                    <Link target="_blank" href="https://www.sohofilmfest.com/2024-winners---nominees.html" style={{marginLeft: '10px'}} className="hover flex-center-center flex-column no-link-styling black-text ">
                        <Image src="/production/sohoFilmFestivalSelection.png" height={70} width={100} alt="2024 SOHO International Film Festival Official Selection"></Image>
                        <p className="modern-font xs-text margin-top">Nominee</p>
                    </Link>
                    <Link target="_blank" href="https://lvshortfilm.com/2024-edition" style={{marginLeft: '10px'}} className="hover flex-center-center flex-column no-link-styling black-text ">
                        <Image src="/production/LasVegas.png" height={70} width={70} alt="Las Vegas Filipino Short Film Festival 2024"></Image>
                        <p className="modern-font xs-text margin-top">Best Director</p>
                    </Link>
                    <Link target="_blank" href="https://piffnyc.org/2024" style={{marginLeft: '10px'}} className="hover flex-center-center flex-column no-link-styling black-text ">
                        <Image src="/production/PacificIslandFilm.png" height={70} width={100} alt="Pacific Island Film Festival NYC 2024"></Image>
                        <p className="modern-font xs-text margin-top">Nominee</p>
                    </Link>
                    
                </div>
                <Link href="https://vimeo.com/952250629/9fd3e69072" className="hover" style={{marginTop: '25px'}} target="_blank"><button>Watch the Film</button></Link>
            </div>
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="flex-start-start flex-column" style={{marginTop: '25px'}}>
            <h3>BTS Photos by Cole Turner and Reanna Chambers</h3>
            <div className="mason-grid margin-top">
                <img src="production/LastLight/LastLight-8.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 8"/>
                <div className="mason-inner-container">
                    <div className="mason-50-container">
                        <img src="production/LastLight/LastLight-7.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 7"/>
                        <img src="production/LastLight/LastLight-1.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 1"/>
                        <img src="production/LastLight/LastLight-2.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 2"/>
                        <img src="production/LastLight/LastLight-3.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 3"/>
                        <img src="production/LastLight/LastLight-11.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 11"/>
                        
                    </div>
                    <div className="mason-50-container">
                        <img src="production/LastLight/LastLight-5.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 5"/>
                        <img src="production/LastLight/LastLight-6.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 6"/>
                        <img src="production/LastLight/LastLight-9.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 9"/>
                        <img src="production/LastLight/LastLight-4.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 4"/>
                        <img src="production/LastLight/LastLight-10.jpg" className="mason-1 mason-item" alt="Last Light BTS Photo 10"/>
                    </div>
                </div>
            </div>
        </div>
    },
    {
        id: "card8",
        title: "Lisa Andersen",
        subtitle: 'Roxy Collection',
        mainImage: "production/LisaAndersen/LisaAndersen-new3.jpg",
        description:
        <div className="credits-section">
            
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Cinematography: </strong>Roxy Facer</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Assists: </strong>Kiana Weight, Simeon Ke-Paloma</p>
            <p><strong>Athletes: </strong>Megan Godinez, Kelia Moniz, Lisa Andersen, Bettylou Sakura Johnson, Bruna Zuan, Monyca Eleogram, Kelis Kaleopa&apos;a, Coral Sallas </p>
            <p><strong>Models: </strong>Malia Kaleopa&apos;a, Tiara Hernandez, Bri Atisone</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid margin-top">
            <img src="production/LisaAndersen/LisaAndersen-new5.jpg" className="mason-1 mason-item" alt="Lisa Andersen Photo 14"/>
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
            <img src="production/LisaAndersen/LisaAndersen-new1.jpg" className="mason-1 mason-item" alt="Lisa Andersen Photo 14"/>
            <img src="production/LisaAndersen/LisaAndersen-new2.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 13"/>
            
            <img src="production/LisaAndersen/LisaAndersen-new4.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 14"/>
            
            <img src="production/LisaAndersen/LisaAndersen-new6.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 14"/>
            <img src="production/LisaAndersen/LisaAndersen-new3.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 13"/>
            <img src="production/LisaAndersen/LisaAndersen-new8.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 13"/>
            <img src="production/LisaAndersen/LisaAndersen-new7.jpg" className="mason-2 mason-item" alt="Lisa Andersen Photo 13"/>
            
        </div>
    },
    {
        id: "card9",
        title: "Manachrome Wetplate Photography",
        mainImage: "production/Manachrome/BuffaloKeaulana.JPG",
        description:
        <div className="credits-section">
            <p>Collodian Wet-Plate Photography by Kenyatta Kelechi</p>
            <p><strong>Photo Assist: </strong>Reanna Chambers</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid margin-top">
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Alika.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Alika"/>
                <div className="caption modern-font modern-font">
                    <p>Alika</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/BuffaloKeaulana.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Buffalo Keaulana"/>
                <div className="caption modern-font">
                    <p>Buffalo Keaulana</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Mainei.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Mainei"/>
                <div className="caption modern-font">
                    <p>Mainei</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Mainei&Alika.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Mainei & Alika"/>
                <div className="caption modern-font">
                    <p>Mainei &amp; Alika</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Noa&Sean.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Noa & Sean"/>
                <div className="caption modern-font">
                    <p>Noa &amp; Sean</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/Tati&Emiri.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of Tati and Emiri"/>
                <div className="caption modern-font">
                    <p>Tati &amp; Emiri</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheFukumitsus.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Fukumitsus"/>
                <div className="caption modern-font">
                    <p>The Fukumitsus</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheKahalewais.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Kahalewais"/>
                <div className="caption modern-font">
                    <p>The Kahalewais</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheMizunos.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Mizunos"/>
                <div className="caption modern-font">
                    <p>The Mizunos</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheMonizFamily.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Moniz Family"/>
                <div className="caption modern-font">
                    <p>The Moniz Family</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheWehners.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Wehners"/>
                <div className="caption modern-font">
                    <p>The Wehners</p>
                </div>
            </div>
            <div className="mason-item mason-2">
                <img src="production/Manachrome/TheWiggins.JPG" className="mason-2 mason-item" alt="Manachrome Wetplate Photography of The Wiggins"/>
                <div className="caption modern-font">
                    <p>The Wiggins</p>
                </div>
            </div>
            
        </div>
    },
    {
        id: "card10",
        title: "Marie Claire",
        subtitle: <span id="MarieClaireSubtitle">United Kingdom</span>,
        mainImage: "production/MarieClaire/MarieClaire-4.jpg",
        description:
        <div>
            <div className="flex-start-spacebetween break-950" style={{marginBottom: '25px'}}>
                <div className="credits-section">
                    
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
                        <Image src="/production/MarieClaire/MC_KB_Cover.jpg" width={330} height={400} alt="Marie Claire Cover"></Image>
                    </Link>
                </div>
            </div>
            <VideoPlayer youtube={true} classes="full-video" src="https://www.youtube.com/watch?v=ymWyAY0xPXU"></VideoPlayer>
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="flex-start-start flex-column modern-font" style={{marginTop: '25px'}}>
            <div className="mason-grid">
                <div className="mason-inner-container">
                    <div className="mason-50-container">
                        <img src="production/MarieClaire/MarieClaire-1.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 2"/>
                        <img src="production/MarieClaire/MarieClaire-2.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 5"/>
                        <img src="production/MarieClaire/MarieClaire-4.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 6"/>
                    </div>
                    <div className="mason-50-container">
                        <img src="production/MarieClaire/MarieClaire-3.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 3"/>
                        <img src="production/MarieClaire/MarieClaire-5.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 4"/>
                        <img src="production/MarieClaire/MarieClaire-6.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 10"/>
                    </div>
                </div>
                <img src="production/MarieClaire/MarieClaire-7.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 7"/>
                <img src="production/MarieClaire/MarieClaire-8.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 8"/>
                <img src="production/MarieClaire/MarieClaire-9.jpg" className="mason-2 mason-item" alt="Marie Claire BTS Photo 9"/>
                <img src="production/MarieClaire/MarieClaire-10.jpg" className="mason-2 mason-item" alt="Marie Claire BTS Photo 11"/>
                
                <img src="production/MarieClaire/MarieClaire-11.jpg" className="mason-1 mason-item" alt="Marie Claire BTS Photo 12"/>

                
            </div>
        </div>
    },
    {
        id: "card11",
        title: "Roxy",
        subtitle: 'Hawaiian Heat',
        mainImage: "production/RoxyHawaiianHeat/RoxyHawaiianHeat-13.jpg",
        description:
        <div className="credits-section">
            
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Cinematography: </strong>Roxy Facer</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Assists: </strong>Malia Mizuno</p>
            <p><strong>Athletes: </strong>Megan Godinez, Kelia Moniz, Monyca Eleogram, Kelis Kaleopa&apos;a</p>
            <p><strong>Models: </strong>Malia Kaleopa&apos;a, Tiara Hernandez, Bri Atisone</p>
        </div>
        ,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-2.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
            <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-14.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-11.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-8.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-12.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-26.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-41.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-15.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                </div>
                <div className="mason-50-container">
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-4.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-10.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-13.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-7.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-43.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                    <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-3.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                </div>
            </div>
            
            
            <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-6.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-52.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-22.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-19.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-55.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-30.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-32.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-44.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                
                </div>
                <div className="mason-50-container">
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-35.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-20.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-37.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-47.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-31.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-38.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-36.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
                </div>
            </div>
            <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-51.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
            <img src="production/RoxyHawaiianHeat/RoxyHawaiianHeat-33.jpg" className="mason-1 mason-item" alt="Roxy Hawaiian Heat Photo"/>
        </div>
        
    },
    {
        id: "card12",
        title: "Roxy Holiday",
        subtitle: `AUS/NZ`,
        mainImage: "production/RoxyHoliday24/RoxyHoliday24-19.jpg",
        description:
        <div className="credits-section">
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Assists: </strong>Malia Mizuno, Xavier Jay</p>
            <p><strong>Athletes: </strong>Kelis Kaleopa&apos;a, Maluhia Kinimaka</p>
            <p><strong>Model: </strong>Tiara Hernandez</p>
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <img src="production/RoxyHoliday24/RoxyHoliday24-1.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-2.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-3.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-4.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-5.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-6.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            
            <img src="production/RoxyHoliday24/RoxyHoliday24-9.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-10.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-11.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-12.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-13.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-14.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-15.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-16.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-17.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-18.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-19.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-20.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-21.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-22.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-23.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-24.jpg" className="mason-2 mason-item" alt="Roxy Holiday 24 Photo"/>
            <img src="production/RoxyHoliday24/RoxyHoliday24-26.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                <img src="production/RoxyHoliday24/RoxyHoliday24-25.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
                <img src="production/RoxyHoliday24/RoxyHoliday24-7.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
                </div>
                <div className="mason-50-container">
                <img src="production/RoxyHoliday24/RoxyHoliday24-27.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
                <img src="production/RoxyHoliday24/RoxyHoliday24-28.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
                <img src="production/RoxyHoliday24/RoxyHoliday24-29.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
                
            <img src="production/RoxyHoliday24/RoxyHoliday24-8.jpg" className="mason-1 mason-item" alt="Roxy Holiday 24 Photo"/>
                </div>
            </div>
            
            
            
            

        </div>
        
    },
    {
        id: "card13",
        title: "Roxy",
        subtitle: 'On the Beach',
        mainImage: "production/RoxyOTB24/RoxyOTB24-6.jpg",
        description:
        <div className="credits-section">
            
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Assists: </strong>Grace Lacio, Kiana Weight</p>
            <p><strong>Athletes: </strong>Megan Godinez, Monica Eleogram, Kelis Kaleopa&apos;a</p>
            <p><strong>Models: </strong>Bri Atisone, Malia Kaleopa&apos;a</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <img src="production/RoxyOTB24/RoxyOTB24-2.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 2"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                    <img src="production/RoxyOTB24/RoxyOTB24-4.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 4"/>
                    <img src="production/RoxyOTB24/RoxyOTB24-3.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 3"/>
                </div>
                <div className="mason-50-container">
                    <img src="production/RoxyOTB24/RoxyOTB24-7.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 7"/>
                    <img src="production/RoxyOTB24/RoxyOTB24-6.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 6"/>
                </div>
            </div>
            <img src="production/RoxyOTB24/RoxyOTB24-1.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 1"/>
            <img src="production/RoxyOTB24/RoxyOTB24-5.jpg" className="mason-2 mason-item" alt="Roxy On the Beach 2024 Photo 5"/><img src="production/RoxyOTB24/RoxyOTB24-8.jpg" className="mason-2 mason-item" alt="Roxy On the Beach 2024 Photo 8"/>
            <img src="production/RoxyOTB24/RoxyOTB24-9.jpg" className="mason-2 mason-item" alt="Roxy On the Beach 2024 Photo 9"/>
            <img src="production/RoxyOTB24/RoxyOTB24-10.jpg" className="mason-2 mason-item" alt="Roxy On the Beach 2024 Photo 10"/>
            <img src="production/RoxyOTB24/RoxyOTB24-12.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 12"/>
            <img src="production/RoxyOTB24/RoxyOTB24-11.jpg" className="mason-2 mason-item" alt="Roxy On the Beach 2024 Photo 11"/>
            <img src="production/RoxyOTB24/RoxyOTB24-13.jpg" className="mason-2 mason-item" alt="Roxy On the Beach 2024 Photo 13"/>
            <img src="production/RoxyOTB24/RoxyOTB24-17.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 17"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                    <img src="production/RoxyOTB24/RoxyOTB24-22.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 22"/>
                    <img src="production/RoxyOTB24/RoxyOTB24-15.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 15"/>
                    <img src="production/RoxyOTB24/RoxyOTB24-18.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 18"/>
                    <img src="production/RoxyOTB24/RoxyOTB24-19.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 19"/>
                </div>
                <div className="mason-50-container">
                    <img src="production/RoxyOTB24/RoxyOTB24-16.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 16"/>
                    <img src="production/RoxyOTB24/RoxyOTB24-14.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 14"/>
                    <img src="production/RoxyOTB24/RoxyOTB24-20.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 20"/>
                    <img src="production/RoxyOTB24/RoxyOTB24-21.jpg" className="mason-1 mason-item" alt="Roxy On the Beach 2024 Photo 21"/>
                    
                </div>
            </div>
        </div>
        
    },
    {
        id: "card14",
        title: "Roxy",
        subtitle: `Peace Joy Aloha`,
        mainImage: "production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-19.jpg",
        description:
        <div className="credits-section">
            
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Cinematography: </strong>Tahnei Roy</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Assists: </strong>Malia Mizuno</p>
            <p><strong>Athletes: </strong>Megan Godinez, Kelis Kaleopa&apos;a</p>
            <p><strong>Models: </strong>Malia Kaleopa&apos;a, Tiara Hernandez, Bri Atisone</p>
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-3.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-4.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-6.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-11.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-10.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-16.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-17.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-19.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-20.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-21.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-22.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-23.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-24.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-25.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-26.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-27.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-28.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-29.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-30.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-31.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-32.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-36.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-38.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-40.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-41.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-43.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-44.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-45.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-42.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha22/RoxyPeaceJoyAloha22-39.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 22 Photo 1"/>
        </div>
    },
    {
        id: "card15",
        title: "Roxy",
        subtitle: `Peace Joy Aloha x Wayfinder Hotel Waikiki`,
        mainImage: "production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-5.jpg",
        description:
        <div className="flex-start-start flex-column">
            <div className="credits-section" style={{marginBottom: '25px'}}>
                
                <p><strong>Photography: </strong>Abby Oh</p>
                <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
                <p><strong>Cinematography: </strong>Roxy Facer</p>
                <p><strong>Production: </strong>Reanna Chambers</p>
                <p><strong>Assists: </strong>Kiana Weight, Simeon Ke-Paloma</p>
                <p><strong>Athletes: </strong>Megan Godinez, Kelia Moniz, Lisa Andersen, Bruna Zuan, Monyca Eleogram, Kelis Kaleopa&apos;a</p>
                <p><strong>Models: </strong>Malia Kaleopa&apos;a, Tiara Hernandez, Bri Atisone</p>
            </div>
            
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-1.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 1"/>
            <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-2.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 2"/>
            <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-3.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 3"/>
            <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-4.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 4"/>
            <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-5.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 5"/>
            <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-6.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 6"/>
            <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-10.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 10"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-7.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 7"/>
                <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-11.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 11"/>
                <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-8.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 8"/>
                <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-15.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 15"/>
                <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-21.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 21"/>
                <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-24.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 24"/>
                <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-17.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 17"/>
                </div>
                <div className="mason-50-container">
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-9.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 9"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-14.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 14"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-22.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 22"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-23.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 23"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-12.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 12"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-13.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 13"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-18.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 18"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-19.jpg" className="mason-2 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 19"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-25.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 25"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-16.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 16"/>
                    <img src="production/RoxyPeaceJoyAloha23/RoxyPeaceJoyAloha23-20.jpg" className="mason-1 mason-item" alt="Roxy Peace Joy Aloha 23 Photo 20"/>
                </div>
            </div>
            <VideoPlayer youtube={true} classes="full-video" src="https://youtu.be/ozZGuxCWFY4?si=Xh9rrdNmwYSST7hS"></VideoPlayer>
        </div>
        
    },
    {
        id: "card16",
        title: "Urban Outfitters",
        subtitle: `United Kingdom`,
        mainImage: "production/UrbanOutfitters/UrbanOutfitters-16.jpg",
        description:
        <div className="credits-section">
            <h3>Urban Outfitters UK x Roxy</h3>
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Production Assistant: </strong>Kiana Weight</p>
            <p><strong>Hair and Makeup: </strong>Jonah Face</p>
            <p><strong>Talent:</strong>Kelis Kaleopa&apos;a, Maluhia Tinimaka, Tiara Hernandez</p>
            
        </div>,
        className: "wide-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            
            <img src="production/UrbanOutfitters/UrbanOutfitters-2.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 2"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-1.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 1"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-3.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 3"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-4.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 4"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-5.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 5"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-11.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 11"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                <img src="production/UrbanOutfitters/UrbanOutfitters-7.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 7"/>
                <img src="production/UrbanOutfitters/UrbanOutfitters-10.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 10"/>
                <img src="production/UrbanOutfitters/UrbanOutfitters-12.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 12"/>
                </div>
                <div className="mason-50-container">
                <img src="production/UrbanOutfitters/UrbanOutfitters-8.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 8"/>   
                <img src="production/UrbanOutfitters/UrbanOutfitters-9.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 9"/> 
                <img src="production/UrbanOutfitters/UrbanOutfitters-6.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 6"/>    
                </div>
            </div>
            
            <img src="production/UrbanOutfitters/UrbanOutfitters-13.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 13"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-18.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 18"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-15.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 15"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-14.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 14"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-17.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 17"/>

            
            <img src="production/UrbanOutfitters/UrbanOutfitters-16.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 16"/>
            <img src="production/UrbanOutfitters/UrbanOutfitters-20.jpg" className="mason-2 mason-item" alt="Urban Outfitters Photo 20"/>
            
            <img src="production/UrbanOutfitters/UrbanOutfitters-19.jpg" className="mason-1 mason-item" alt="Urban Outfitters Photo 19"/>
            
        </div>
        
    },
    {
        id: "card17",
        title: "Roxy",
        subtitle: `Active By Nature`,
        mainImage: "production/RoxyActiveByNature/Roxy-ActiveByNature-1.jpg",
        description:
        <div className="flex-start-start flex-column">
        <div className="credits-section" style={{marginBottom: '25px'}}>
            <p><strong>Photography:</strong> Tahnei Roy</p>
            <p><strong>Production/Cinematography: </strong>Ben Ono</p>
            <p><strong>Camera Assist: </strong>Xav Sho</p>
            <p><strong>Styling/Production Assist: </strong>Reanna Chambers</p>
            <p><strong>Athletes: </strong>Mainei Kinimaka, Maluhia Kinimaka</p>
        </div>
        
        <VideoPlayer youtube={true} classes="full-video" src="https://www.youtube.com/watch?v=8dI9DpYQVNE"></VideoPlayer>

        </div>,
        className: "wide-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-1.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-9.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-6.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-7.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
                    
                </div>
                <div className="mason-50-container">
                    
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-4.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-10.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-8.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
                </div>
            </div>
            <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-16.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 16"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-21.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 21"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-25.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 25"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-26.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 26"/>
                </div>
                <div className="mason-50-container">
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-23.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 23"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-22.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 22"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-27.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 27"/>  
                </div>
            </div>
            <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-3.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
            <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-18.jpg" className="mason-2 mason-item" alt="Active By Nature Photo 18"/>
            <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-19.jpg" className="mason-2 mason-item" alt="Active By Nature Photo 19"/>
            <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-20.jpg" className="mason-2 mason-item" alt="Active By Nature Photo 20"/>
            <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-24.jpg" className="mason-2 mason-item" alt="Active By Nature Photo 24"/>
            
            
            <div className="mason-inner-container">
                <div className="mason-50-container">
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-12.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 12"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-13.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 13"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-17.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 17"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-2.jpg" className="mason-1 mason-item" alt="Active By Nature Photo"/>
                </div>
                <div className="mason-50-container">  
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-11.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 11"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-15.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 15"/>
                    <img src="production/RoxyActiveByNature/Roxy-ActiveByNature-14.jpg" className="mason-1 mason-item" alt="Active By Nature Photo 14"/>
                    
                </div>
            </div>
        </div>
        
    },
    {
        id: "card18",
        title: "Roxy",
        subtitle: `Jamaica Series`,
        mainImage: "production/RoxyJamaica/JamaicaTitle.jpg",
        description:
        <div className="flex-start-start flex-column">
        <div className="credits-section" style={{marginBottom: '25px'}}>
            
            <p><strong>Director &amp; Producer: </strong>Danielle Black Lyons</p>
            <p><strong>Cinematography: </strong>Roxy Facer</p>
            <p><strong>Photography: </strong>Sara Lee</p>
            <p><strong>AP: </strong>Reanna Chambers</p>
            <p><strong>Skaters: </strong>Kadiya McDonald, Kayla Wheeler</p>
            <p>Freedom Skatepark JA</p>

        </div>
        <div style={{marginBottom: '15px'}}></div>
            <VideoPlayer youtube={true} classes="full-video" src="https://youtu.be/FmdrzEhqYtA"></VideoPlayer>
        
        <div style={{marginBottom: '15px'}}></div>
        <VideoPlayer youtube={true} classes="full-video" src="https://youtu.be/cnUjfsdY0wI"></VideoPlayer>
        
        <div style={{marginBottom: '15px'}}></div>
        <VideoPlayer youtube={true} classes="full-video" src="https://youtu.be/VaZ5SGZHbp0"></VideoPlayer>
        

        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <img src="production/RoxyJamaica/RoxyJamaica-8.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
            <img src="production/RoxyJamaica/RoxyJamaica-1.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
            <img src="production/RoxyJamaica/RoxyJamaica-2.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
            <img src="production/RoxyJamaica/RoxyJamaica-3.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
            <img src="production/RoxyJamaica/RoxyJamaica-4.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
            <img src="production/RoxyJamaica/RoxyJamaica-5.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
            <img src="production/RoxyJamaica/RoxyJamaica-6.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
            <img src="production/RoxyJamaica/RoxyJamaica-7.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
            
            <img src="production/RoxyJamaica/RoxyJamaica-9.jpeg" className="mason-1 mason-item" alt="Jamaica for Roxy Photo"/>
   
        </div>
        
    },
    {
        id: "card19",
        title: "Roxy OTB",
        subtitle: <span id="roxyOTBAUSNZSubtitle">AUS/NZ</span>,
        mainImage: "production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-40.jpg",
        description:
        <div className="flex-start-start flex-column">
        <div className="credits-section">
            
            <p><strong>Photography: </strong>Abby Oh</p>
            <p><strong>Drone/Photography: </strong>Yoshi Tanaka</p>
            <p><strong>Production: </strong>Reanna Chambers</p>
            <p><strong>Assists: </strong>Grace Lacio</p>
            <p><strong>Athletes: </strong>Kelis Kaleopa&apos;a, Maluhia Kinimaka</p>
            <p><strong>Model:</strong>Tiara Hernandez</p>
        </div>
        
        </div>,
        className: "tall-card",
        columnLayout:
        <div className="mason-grid" style={{marginTop: '25px'}}>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                    <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-3.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 3"/>
                </div>
                <div className="mason-50-container">
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-5.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 5"/>
                </div>
            </div>
           
            
            <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-7.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 7"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-14.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 14"/>
                </div>
                <div className="mason-50-container">
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-13.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 13"/>
                </div>
            </div>
            <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-9.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 9"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-11.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 11"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-19.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 19"/>
                </div>
                <div className="mason-50-container">
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-17.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 17"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-21.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 21"/>
                </div>
            </div>
            <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-20.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 20"/>
            <div className="mason-inner-container">
                <div className="mason-50-container">
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-23.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 23"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-27.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 27"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-31.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 31"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-33.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 33"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-37.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 37"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-32.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 32"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-43.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 43"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-47.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 47"/>
                
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-51.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 51"/>
                </div>
                <div className="mason-50-container">
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-25.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 25"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-28.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 28"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-22.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 22"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-35.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 35"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-39.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 39"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-40.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 40"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-45.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 45"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-49.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 49"/>
                <img src="production/RoxyOTBAusNZ/Roxy-OTB-NZAUS-50.jpg" className="mason-1 mason-item" alt="Roxy OTB Aus / NZ Photo 50"/>
                </div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            

        </div>
        
    },  
  ];
  