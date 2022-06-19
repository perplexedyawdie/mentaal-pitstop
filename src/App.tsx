import React from 'react';
import Cooldown from './components/Cooldown';
import GetStarted from './components/GetStarted';
import Main from './components/Main';
import MindfullnessCards from './components/MindfullnessCards';
import { NavContext } from './context/NavContext';

function App() {
  const [currLoc, setCurrLoc] = React.useState<number>(1)

  return (
    <NavContext.Provider value={{
      currLoc,
      setCurrLoc
    }}>
      <div className="hero min-h-screen bg-gradient-to-r from-sky-100 via-pink-100 to-purple-100">
        <div className="hero-content text-center">
          <div className="w-full space-y-8">
            <header>
              <img className='m-auto' src='/assets/images/header-2.png' alt='Mental Pitstop' />
            </header>
            {/* <Main /> */}
            {/* <Cooldown /> */}
            {/* <GetStarted /> */}
            <MindfullnessCards />
          </div>
        </div>
      </div>
    </NavContext.Provider>
  );
}

export default App;
