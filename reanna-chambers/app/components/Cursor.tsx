"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current || !cursorInnerRef.current) return;
      cursorRef.current.style.left = `${e.clientX + 40}px`;
      cursorRef.current.style.top = `${e.clientY + 60}px`;
      cursorInnerRef.current.style.left = `${e.clientX}px`;
      cursorInnerRef.current.style.top = `${e.clientY}px`;
    };

    const cursor = document.querySelector(".cursor2");
    const hoverElements = document.querySelectorAll("a, .hover");


    if (cursor) {
      hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
          cursor.classList.add("cursor-animate");
        });
        el.addEventListener("mouseleave", () => {
          cursor.classList.remove("cursor-animate");
        });
      });
    }

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach(el => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={cursorInnerRef} className="cursor2"></div>

      <style jsx global>{`
        * {
          cursor: none;
        }

        .cursor {
          width: 50px;
          height: 50px;
          position: fixed;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 999999;
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

        .cursor-animate {
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
      `}</style>
    </>
  );
}
