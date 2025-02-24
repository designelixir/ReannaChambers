'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { clientsList } from "./clientListData";

const categories = [ 
  {categoryName: 'all', categoryDisplay: 'SHOW ALL'}, 
  {categoryName: 'fashion', categoryDisplay: 'FASHION'}, 
  {categoryName: 'art', categoryDisplay: 'ART'}, 
  {categoryName: 'hotel', categoryDisplay: 'TRAVEL'},
  {categoryName: 'food', categoryDisplay: 'F&B'}, 
  {categoryName: 'other', categoryDisplay: 'OTHER'}
];

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
          CLIENT LIST
        </h2>
        <div className="tag-wrapper flex-center-end flex-wrap">
  <span className="black-text-glow" style={{ textWrap: 'nowrap', marginTop: '5px' }}>
    <i>filter by:</i>&nbsp;
  </span>

  {/* Only show "SHOW ALL" when another category is selected */}
  {selectedCategory !== "all" && (
    <div
      className="client-tag black-text-glow modern-font"
      onClick={() => setSelectedCategory("all")}
    >
      SHOW ALL
    </div>
  )}

  {/* Render other categories */}
  {categories
    .filter(category => category.categoryName !== "all") // Exclude "SHOW ALL"
    .map(category => (
      <div
        key={category.categoryName}
        className={`client-tag black-text-glow modern-font ${
          selectedCategory === category.categoryName ? "active-tag white-text-glow" : ""
        }`}
        onClick={() => setSelectedCategory(category.categoryName)}
      >
        {category.categoryDisplay}
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
              <p className="all-caps black-text-glow">{client.clientName}</p>
            </div>
          ))
        ) : (
          <p>No clients found in this category.</p>
        )}
      </div>
      <style jsx>{`
        .client-card { margin: 0.5%; padding:  15px;}
        .client-tag {padding: 7px 5px 0; font-size: 14px; margin: 2px;}
        .client-tag:not(:last-child)::after {content: ", ";}

        .client-tag:hover {text-decoration: underline; cursor: pointer;}
        .engraved-box { border: 1px solid rgba(176, 148, 109, 0.15);}
        .engraved-box:hover {border: 1px solid rgba(176, 148, 109, 0.75);}
        .active-tag {background: var(--off-black); color: white; cursor: pointer;}

        @media screen and (max-width: 850px) {
        .client-list-header {flex-direction: column; align-items: flex-start;}
        .client-list-header h2 {margin-bottom: 35px}
        .client-card {padding: 10px}
        .client-card p {font-size: 16px;}
        }
      `}</style>
    </div>
  );
}
