'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { clientsList } from "./clientListData";

const categories = ["all", "fashion", "airlines", "food", "finance", "other"];

export default function ClientList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter clients based on the selected category
  const filteredClients =
    selectedCategory === "all"
      ? clientsList
      : clientsList.filter((client) => client.clientCategory === selectedCategory);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.querySelectorAll(".client-card"));

    // **Clear all items at once**
    gsap.to(items, {
      opacity: 0,
      y: 30,
      duration: 0.3, // All disappear together
      ease: "power3.out",
      onComplete: () => {
        // **Animate new items with staggered effect**
        gsap.fromTo(
          Array.from(containerRef.current?.querySelectorAll(".client-card") || []),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15, // Waterfall effect on re-appear
            ease: "power3.out",
          }
        );
      },
    });
  }, [filteredClients]); // Runs whenever the filter changes

  return (
    <div id="clientList" className="flex-start-start flex-column full-width">
      {/* Header with filters */}
      <div className="client-list-header flex-center-spacebetween full-width">
        <h2 className="black-text-glow">
          <span className="aalt">C</span><span style={{ textDecoration: "underline" }}>LIENT</span>
          <span className="aalt" style={{ paddingRight: "2px" }}>&nbsp;L</span>
          <span style={{ textDecoration: "underline" }}>IST</span>
        </h2>
        <div className="tag-wrapper flex-center-end flex-wrap">
          <span className="black-text-glow" style={{ textWrap: 'nowrap', marginTop: '5px' }}>Filter by:&nbsp;</span>
          {categories.map((category) => (
            <div
              key={category}
              className={`client-tag modern-font ${selectedCategory === category ? "active-tag white-text-glow" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: "50px" }}></div>

      {/* Client cards */}
      <div ref={containerRef} className="client-card-container flex-start-start flex-wrap full-width">
        {filteredClients.length > 0 ? (
          filteredClients.map((client, index) => (
            <div
              key={index}
              className={`client-card engraved-box flex-center-center no-flex-grow ${client.clientCategory}`}
              onClick={() => client.clientLink && window.open(client.clientLink, "_blank")}
              style={{ cursor: client.clientLink ? "pointer" : "default" }}
            >
              <p className="all-caps">{client.clientName}</p>
            </div>
          ))
        ) : (
          <p>No clients found in this category.</p>
        )}
      </div>
      <style jsx>{`
        .client-card { margin: 0.5%; padding:  15px;}
        .client-tag {padding: 5px 10px; border: 1px solid black; margin: 2px;}
        .client-tag:hover {background: var(--off-black); color: white; cursor: pointer;}
        .engraved-box { border: 1px solid rgba(176, 148, 109, 0.15);}
        .engraved-box:hover {border: 1px solid rgba(176, 148, 109, 0.75);}
        .active-tag {background: var(--off-black); color: white; cursor: pointer;}

        @media screen and (max-width: 850px) {
        .client-list-header {flex-direction: column; align-items: flex-start;}
        .client-list-header h2 {margin-bottom: 35px}
        }
      `}</style>
    </div>
  );
}
