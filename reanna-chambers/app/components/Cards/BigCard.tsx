'use client';
import { useRef} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BigCardProps {
    destination: string;
  }
  
  export default function BigCard({ destination }: BigCardProps) {
  
  
  const router = useRouter();
  const loaderCardRef = useRef(null);


    useGSAP(() => {
        const card = loaderCardRef.current;
        const timeline = gsap.timeline();
        timeline
            // Step 1: Expand to Full Screen
            .fromTo(
              card,
              { width: "0", display: "none",  },
              {
                width: "120vw",
                maxWidth: 'unset',
                display: "block",
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                  router.push(destination);
                }
              }
            )
      });


  return (
    <div className="flex-center-center" id="bigCardLoaderContainer">
      <div
        className="card"
        id="loaderCard"
        ref={loaderCardRef} // Attach ref to loaderCard
        style={{ opacity: "1" }}
      >
        <Image src="/cards/card-textured-bg.jpg" fill alt="card" />
      </div>
    </div>
  );
}
