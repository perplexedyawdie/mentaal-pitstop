import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import './Cooldown.css'

function Cooldown() {
    const opts: YouTubeProps['opts'] = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <>
            <header>
                <h1 className="text-2xl font-bold text-slate-400">Let's cooldown for a minute, <br /> just press play, close your eyes, and breathe</h1>
            </header>
            <div className="card bg-slate-50 shadow-xl">
                <div className="card-body p-4">
                <YouTube
                        videoId="5qap5aO4i9A"
                        opts={opts}
                        iframeClassName="card shadow-md"
                        className="youtubeContainer" />
                </div>
            </div>
            </>
    )
}

export default Cooldown