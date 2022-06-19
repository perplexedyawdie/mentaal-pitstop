import React from 'react'

function GetStarted() {
    return (
        <>
            <header>
                <h1 className="text-2xl font-bold text-slate-400">When you're ready, let's dig a little deeper into those thoughts with a few questions.</h1>
            </header>
            <section className='space-x-4'>
                <button className="btn bg-[#7dd3fc] gap-2 text-slate-600 font-bold border-[#7dd3fc]">🎶 Chillout</button>
                    <button className="btn bg-[#845bad] gap-2 text-slate-100 font-bold border-[#845bad]">🕵️‍♀️ Continue</button>
            </section>
        </>
    )
}

export default GetStarted