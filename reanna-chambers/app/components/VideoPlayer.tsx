'use client'
import YoutubeVideo from "youtube-video-element/react";
import MediaThemeSutro from "player.style/sutro/react";
import VimeoVideo from 'vimeo-video-element/react';


interface VideoPlayerProps {
  src: string;
  vimeo?: boolean;
  youtube?: boolean;
  classes?: string;
}

export default function VideoPlayer({ src, vimeo, youtube, classes }: VideoPlayerProps) {
  return (
    <div className={`video ${classes}`}>
    
        {youtube && 
        <MediaThemeSutro>
            <YoutubeVideo slot="media" src={src} playsInline></YoutubeVideo>
        </MediaThemeSutro>
        }

        {vimeo && 
        <MediaThemeSutro>
            <VimeoVideo
            slot="media"
            src={src}
            playsInline
            
            ></VimeoVideo>
        </MediaThemeSutro>
        }
      
     
    
    </div>
  );
}
