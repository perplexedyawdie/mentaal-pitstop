import React from 'react'
import { NavContext } from '../context/NavContext'

function GetStarted() {
    const { setCurrLoc } = React.useContext(NavContext)!
    function handleChilloutBtnClick(e: any) {
        e.preventDefault();
        setCurrLoc(prev => prev - 1);
    }
    function handleContinueBtnClick(e: any) {
        e.preventDefault();
        setCurrLoc(prev => prev + 1);
    }
    return (
        <>
            <header>
                <h1 className="text-2xl font-bold text-slate-400">When you're ready, let's dig a little deeper into those thoughts with a few questions.</h1>
            </header>
            <section className='space-x-4'>
                <button 
                className="btn bg-[#7dd3fc] gap-2 text-slate-600 font-bold border-[#7dd3fc]"
                onClick={handleChilloutBtnClick}>🎶 Chillout</button>
                <button 
                className="btn bg-[#845bad] gap-2 text-slate-100 font-bold border-[#845bad]"
                onClick={handleContinueBtnClick}>🕵️‍♀️ Continue</button>
            </section>
        </>
    )
}

export default GetStarted