"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this runs only in the browser

    const moveCursor = (e: MouseEvent) => {
      cursorRef.current!.style.left = `${e.clientX + 40}px`;
      cursorRef.current!.style.top = `${e.clientY + 60}px`;
      cursorInnerRef.current!.style.left = `${e.clientX}px`;
      cursorInnerRef.current!.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={cursorInnerRef} className="cursor2"></div>
 


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

        * {
          cursor: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cursor {
          width: 50px;
          height: 50px;
          background-size: contain;
          background-repeat: no-repeat;
          transition: all 200ms ease-out;
          position: fixed;
          pointer-events: none;
          transform: translate(calc(-50% + 15px), -50%);
          z-index: 99999999999999999999999999999;
        }

        .cursor2 {
          width: 20px;
          height: 20px;
          background-image: url('/star.svg'); 
          background-size: contain;
          background-repeat: no-repeat;
          position: fixed;
          pointer-events: none;
          transition: width 0.3s, height 0.3s, opacity 0.3s;
          z-index: 9999;
        }

        .hovercursor {
          animation: rotateExpand 1s forwards;
        }

        @keyframes rotateExpand {
          0% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(180deg) scale(1.25);
          }
        }

        @keyframes rotateShrink {
          from {
            transform: rotate(180deg) scale(1.25);
          }
          to {
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </>
  );
}
