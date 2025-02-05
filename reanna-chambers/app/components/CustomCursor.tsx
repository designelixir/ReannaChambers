import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

   
    window.addEventListener("mousemove", moveCursor);

    

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"/>
      <style jsx global>{`
        * {cursor: none;}

        .custom-cursor {
            background-image: url('/star.svg'); 
            position: fixed; 
            width: 20px; 
            height: 20px; 
            pointer-events: none; 
            z-index: 9999; 
            transform: translate(-50%, -50%);
        }

        
      `}</style>
    </>
  );
}
