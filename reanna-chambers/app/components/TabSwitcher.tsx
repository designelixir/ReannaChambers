'use client';
import { useState, ReactNode } from 'react';

interface Tab {
  name: string;
  content: ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[]; // Array of tabs with names and content
  defaultTab?: string; // Optional default active tab
}

export default function TabSwitcher({ tabs, defaultTab }: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.name); // Default to the first tab

  return (
    <>
      {/* Tab Headers */}
      <div className="flex-start-start modern-font black-text-glow" style={{ padding: '0 2.5vw' }}>
        {tabs.map((tab, index) => (
          <span key={tab.name} style={{ display: 'flex', alignItems: 'center' }}>
            <p
              className={activeTab === tab.name ? 'active-tab' : 'hover'}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </p>
            {index < tabs.length - 1 && <p>&nbsp;/&nbsp;</p>} {/* Separator between tabs */}
          </span>
        ))}
      </div>

      {/* Tab Content */}
      {tabs.map(
        (tab) =>
          activeTab === tab.name && (
            <div key={tab.name} id={tab.name.replace(/\s+/g, '-').toLowerCase()}>
              {tab.content}
            </div>
          )
      )}
    </>
  );
}
