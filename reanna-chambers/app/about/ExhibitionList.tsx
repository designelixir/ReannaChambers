'use client'
export default function ExhibitionList(){
    return (
        <>
         <h2 className="white-text" style={{marginBottom: '50px'}}>
            <span className="aalt">A</span>
            <span style={{textDecoration: 'underline'}}>RT</span>&nbsp; 
            <span className="aalt">E</span>
            <span style={{textDecoration: 'underline'}}>XHIBITIONS</span>
        </h2>
        
        <div id="artExhibitionsList">
            <p className="white-text"><i>Fiberworkshop &quot;Your Paradise&quot; | Kaimana Beach Hotel, HI</i></p>
            <p className="white-text"><i>January 2024 | Fiberworkshop &quot;A Core Memory&quot; | Kaimana Beach Hotel, HI</i></p>
            <p className="white-text"><i>June 2019 | Girl Group Show at Treehouse | Kaka&apos;ako, HI</i></p>
            <p className="white-text"><i>May 2019 | Analog Sunshine Recorders at Single Double | Chinatown, HI</i></p>
            <p className="white-text"><i>January 2019 | Untitled group show at Morning Glass | Manoa, HI</i></p>
            <p className="white-text"><i>December 2018 | Analog Sunshine Recorders at Aupuni Space | Kaka&apos;ako, HI</i></p>
            <p className="white-text"><i>October 2018 |  Local Colors Gallery at Hawaiian Airlines |  Honolulu, HI.</i></p>
            <p className="white-text"><i>July 2018 | Group show &quot;Days Off.&quot; at Aupuni Space | Kaka&apos;ako, HI</i></p>
            <p className="white-text"><i>February 2018 | Untitled first solo show at Bethel Union |  Chinatown, HI</i></p>
        </div>
        <style jsx>{`
            #artExhibitionsList p { padding-bottom: 10px!important;}

        `}</style>
        </>
    )
}