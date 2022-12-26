import React from 'react';
import Graph0 from '../Graph0.png';

function SecondDiv() {
  return (
    <React.Fragment>
        <div className='flex justify-center mt-28 mb-28'>
            <div className='w-1/3 mx-auto text-left'>
                <h1 className='mb-3 font-bold text-stone-800'>EXPERIENCED WE ARE!</h1>
                <p className='mb-3 text-stone-600'>private investors around the world access the professional bullion markets. You can benefit from the lowest costs for buying, selling and storing gold and silver.</p>
                <p className='text-stone-600'>Bars are stored in professional-market vaults in Zurich, London, Toronto, Singapore or New York. You choose where. Because of our size, you benefit from the low storage costs we have negotiated, which always include insurance.</p>
            </div>
            <div className='w-1/3 mx-auto'>
                <img src={Graph0} alt='...'/>
            </div>
        </div>
    </React.Fragment>
  );
}

export default SecondDiv;
