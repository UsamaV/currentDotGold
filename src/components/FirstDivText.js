import React from 'react';

function FirstDivText() {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center justify-center h-5/6'>
        <h1 className='text-white'><span className='text-4xl'>BUY GOLD, SILVER, AT THESE </span><span className='text-6xl'>LIVE PRICES</span></h1>
        <p className='text-white text-xs'><span>ORE GOLD: 0.010KG @ €54,720/KG [6:01:56 PM PKT]</span><span>PORE GOLD: 0.010KG @ €54,720/KG [6:01:56 PM PKT]</span></p>
      </div>
      <div className='flex items-center justify-center'>
        <button className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white py-2 px-4 rounded-full">
          Calculated Value
        </button>
      </div>
    </React.Fragment>
  );
}

export default FirstDivText;
