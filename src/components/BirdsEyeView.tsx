import React from 'react'
import { NavContext } from '../context/NavContext'

function BirdsEyeView() {
    const { setCurrLoc, mindfullnessAnswers } = React.useContext(NavContext)!
    function handleBtnClick(e: any) {
        setCurrLoc(0)
    }
    return (
        <div>
            <div className="card glass flex items-center justify-center shadow-xl">
                <div className="relative w-full max-w-lg">
                    <div className="absolute -z-10 top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
                    <div className="absolute -z-10 top-0 -right-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                    <div className="absolute -z-10 -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
                    <div className=" relative card-body z-20">
                        <h2 className="card-title text-slate-800 text-center justify-center items-center mb-4">A Birds Eye View <br />🐦👀</h2>
                        <div className="divider"></div>
                        {
                            mindfullnessAnswers.map((mindullfnessAns, idx) => {
                                return (<div key={idx} className="card glass text-primary-content">
                                    <div className="card-body">
                                        <h2 className="card-title text-slate-600 text-sm">{mindullfnessAns.header}</h2>
                                        <p className='text-slate-500'>{mindullfnessAns.body}</p>
                                    </div>
                                </div>)
                            })
                        }
                        <div className="card-actions justify-center p-8">
                            <button 
                            className="btn btn-outline text-pink-800 hover:bg-pink-200 border-pink-600 hover:border-pink-400 hover:text-pink-600 font-bold"
                            onClick={handleBtnClick}>👉Click to Conquer Life👈</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BirdsEyeView