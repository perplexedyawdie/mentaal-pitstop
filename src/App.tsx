import React from 'react';
import Cooldown from './components/Cooldown';
import Main from './components/Main';

function App() {
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-sky-100 via-pink-100 to-purple-100">
        <div className="hero-content text-center">
          <div className="w-full space-y-8">
            <header>
              <img className='m-auto' src='/assets/images/header-2.png' alt='Mental Pitstop' />
            </header>
            {/* <Main /> */}
            <Cooldown />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
