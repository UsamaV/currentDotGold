import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import FirstDivText from './components/FirstDivText';
import SecondDiv from './components/SecondDiv';
import ThirdDiv from './components/ThirdDiv';
import FourthLasDiv from './components/FourthLastDiv';
import ThirdLastDiv from './components/ThirdLastDiv';
import FifthLastDiv from './components/FifthLastDiv';
import SecondLastDiv from './components/SecondLastDiv';
import LastDiv from './components/LastDiv';
import Tabs from './components/Tabs';
import Table1 from './components/Table1';

function App() {
  return (
    <React.Fragment>
      <div className='h-screen bg-cover bg-no-repeat bg-[url("/public/assets/images/FirstDivImage@2x.png")]'>
        <NavBar />
        <FirstDivText/>        
      </div>
      <SecondDiv/>
      <ThirdDiv/>
      <Table1/>
      <Tabs/>
      <FifthLastDiv />
      <FourthLasDiv />
      <ThirdLastDiv/>
      <SecondLastDiv/>
      <LastDiv/>
    </React.Fragment>
  );
}

export default App;
