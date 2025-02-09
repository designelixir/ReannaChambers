'use client'
export default function AboutHero() {
    return (
      <div className="reanna-portrait-bg  flex-end-center">
        <div className="reanna-portrait fade-in"></div>
        <style jsx>{`
          .reanna-portrait-bg {
            width: 100vw;
            height: 55vh;
            margin-bottom: -1px;
            background-image: url('/reanna-portrait-bg.jpg'); /* Fixed Path */
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center bottom;
            min-height: 600px;
            z-index: 0;
          }
  
          .reanna-portrait {
            background-image: url('/ReannaPortrait-cutout.png'); /* Fixed Path */
            background-size: contain;
            background-repeat: no-repeat;
            width: 25vw;
            height: 100%;
            min-width: 300px;
            margin-bottom: 1px;
            max-height: 450px;
            background-position: center bottom;
          }
        `}</style>
      </div>
    );
  }
  