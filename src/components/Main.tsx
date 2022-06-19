import React from 'react'
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-indigo.css';
import './Main.css';

function Main() {
    return (
        <>
            <h1 className="text-4xl font-bold text-slate-400">Hey there,</h1>
            <p className="py-6 font-semibold text-slate-400">Feeling overwhelmed? Somebody did something that rubbed you the wrong way? Thoughts feeling tangled?</p>
            <AwesomeButton
                size="large"
                type="secondary"
            >
                Take A Break
            </AwesomeButton>
        </>
    )
}

export default Main