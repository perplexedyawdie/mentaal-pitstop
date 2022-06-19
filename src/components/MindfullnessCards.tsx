import React from 'react'

const qs = [
    "Let's start with what happened.",
    "How'd you react?",
    "Based on your experiences, how do you think you should've reacted?",
    "Now let's look at how you truly wanted to react.",
    "How did it make you feel?",
    "Do you think you should've felt differently about it?"
];
function MindfullnessCards() {
    const [mindfullnessQ, setMindfullnessQ] = React.useState<number>(0);
    function handleNextQClick(e: any) {
        // e.preventDefault();
        setMindfullnessQ(prev => {
            if (prev < 5) {
                console.log('going to next q')
                return prev + 1;
            } else {
                console.log('at last q')
                return prev;
            }
        })
    }
    return (
        <>
            <div className="card glass flex items-center justify-center shadow-xl">
                <div className="relative w-full max-w-lg">
                    <div className="absolute -z-10 top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                    <div className="absolute -z-10 top-0 -right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                    <div className="absolute -z-10 -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
                    <div className=" relative card-body z-20">
                        <h2 className="card-title text-slate-800 text-center">{qs[mindfullnessQ]}</h2>
                        <textarea className="textarea textarea-bordered glass text-slate-800" ></textarea>
                    </div>
                    <div className="card-actions sm:justify-end justify-center py-4 sm:px-8 z-20">
                        <button className="btn btn-outline hover:bg-pink-400 border-pink-600 hover:border-pink-400" onClick={handleNextQClick}>
                            💪
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MindfullnessCards