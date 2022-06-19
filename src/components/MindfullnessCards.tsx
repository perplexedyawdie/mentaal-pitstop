import React from 'react'

function MindfullnessCards() {
    return (
        <>
            <div className="bg-gray-50 card glass flex items-center justify-center shadow-xl">
                <div className="relative w-full max-w-lg">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
                    <div className=" relative card-body">
                        <h2 className="card-title text-slate-800 text-center">Let's start with what happened.</h2>
                        <textarea className="textarea textarea-bordered glass text-slate-800" ></textarea>
                    </div>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default MindfullnessCards