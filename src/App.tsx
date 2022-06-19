import React from 'react';
import Cooldown from './components/Cooldown';
import GetStarted from './components/GetStarted';
import Main from './components/Main';
import MindfullnessCards from './components/MindfullnessCards';
import { NavContext } from './context/NavContext';
import { NavCount } from './models/nav.model';

function App() {
  const [currLoc, setCurrLoc] = React.useState<number>(0)
  const [currComp, setCurrComponent] = React.useState<JSX.Element>(<Main />);

  React.useEffect(() => {
    switch (currLoc) {
      case NavCount.MAIN:
        setCurrComponent(<Main />)
        break;
      case NavCount.COOLDOWN:
        setCurrComponent(<Cooldown />)

        break;
      case NavCount.GET_STARTED:
        setCurrComponent(<GetStarted />)

        break;
      case NavCount.MINDFULLNESS_CARDS:
        setCurrComponent(<MindfullnessCards />)

        break;
      case NavCount.BIRDS_EYE_VIEW:
        setCurrComponent(<Main />)

        break;
      default:
        setCurrComponent(<Main />)
        break;
    }
  }, [currLoc])


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
            {currComp}
          </div>
        </div>
      </div>
    </NavContext.Provider>
  );
}

export default App;
