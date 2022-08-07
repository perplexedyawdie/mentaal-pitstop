import React from 'react'
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';
import { NavContext } from '../context/NavContext';
import './Cooldown.css'

function Cooldown() {
    const { setCurrLoc } = React.useContext(NavContext)!

    const opts: YouTubeProps['opts'] = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    function handleVideoPlaying(event: YouTubeEvent<number>) {
        setTimeout(() => {
            setCurrLoc(prev => prev+1)
        }, 60000);
    }
    return (
        <>
            <header>
                <h1 className="text-2xl font-bold text-slate-400">Let's cooldown for a minute, <br /> just press play, close your eyes, and breathe</h1>
            </header>
            <div className="card bg-slate-50 shadow-xl">
                <div className="card-body p-4">
                <YouTube
                        videoId="5KAN9_CzSA"
                        opts={opts}
                        iframeClassName="card shadow-md"
                        className="youtubeContainer"
                        onPlay={handleVideoPlaying} />
                </div>
            </div>
            </>
    )
}

export default Cooldown
