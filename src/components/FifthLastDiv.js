import React from 'react';
import Graph1 from '../Graph1.png';

function FifthLastDiv() {
    return (
        <React.Fragment>
            <div className='mt-28 mb-28'>
                <div className='mx-auto text-center w-3/6 mb-14'>
                    <h1 className='text-2xl mb-7 text-stone-800 font-semibold'>GOLD RATE COMPARISON</h1>
                    <p className='text-base text-stone-600'>private investors around the world access the professional bullion markets. You can benefit from the lowest costs for buying, selling and storing gold.</p>
                </div>
                <div className='w-4/6 mx-auto'>
                    <img src={Graph1} alt='...' />
                </div>
            </div>
        </React.Fragment>
    );
}

export default FifthLastDiv;