'use client'
import { useState } from 'react';
import PhotoCardGrid from './PhotoCardGrid';
import prints from './printData';
import Prints from './Prints';

export default function PhotoTabSwitcher(){
    const [activeTab, setActiveTab] = useState<'projects' | 'prints'>('projects'); // Default to 'projects'

  const showTab = (tab: 'projects' | 'prints') => {
    setActiveTab(tab);
  };
    return (
        <section>
        <div className="flex-start-start" style={{ padding: '0 2.5vw' }}>
        <p
          className={activeTab === 'projects' ? 'active-tab' : 'hover'}
          onClick={() => showTab('projects')}
        >
          Projects
        </p>
        <p>&nbsp;/&nbsp;</p>
        <p
          className={activeTab === 'prints' ? 'active-tab' : 'hover'}
          onClick={() => showTab('prints')}
        >
          Prints
        </p>
      </div>

      {/* Show only the active section */}
      {activeTab === 'projects' && (
        <div id="projects">
          <PhotoCardGrid />
        </div>
      )}

      {activeTab === 'prints' && (
        <div id="prints">
          <Prints prints={prints} />
        </div>
      )}
        </section>
    )
}