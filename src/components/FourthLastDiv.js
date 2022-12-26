import React from 'react';
import Dollar from '../Dollar@2x.png';
import Refresh from '../refresh@2x.png';
import Cash from '../cash@2x.png';


function FourthLastDiv() {
    return (
        <React.Fragment>
            <div className='pt-28 pb-28 bg-slate-50'>
                <div className='mx-auto text-center w-3/6 mb-14'>
                    <h1 className='text-2xl mb-7 text-stone-800 font-semibold'>ONLINE INVESTMENT GOLD SERVICE</h1>
                    <p className='text-base text-stone-600'>private investors around the world access the professional bullion markets. You can benefit from the lowest costs for buying, selling and storing gold and silver.</p>
                </div>
                <div className='flex'>
                    <div className='w-1/3 border-dotted border-r-2 border-stone-600'>
                        <img className='mx-auto mb-6' src={Dollar} alt='...' />
                        <h1 className='text-center text-2xl text-slate-700'>$100 million</h1>
                        <p className='text-center text-slate-700 text-lg'>of gold and silver traded monthly</p>
                    </div>
                    <div className='w-1/3 border-dotted border-r-2 border-stone-600'>
                        <img className='mx-auto mb-7' src={Cash} alt='...' />
                        <h1 className='text-center text-2xl text-slate-700'>$3.7 billion</h1>
                        <p className='text-center text-slate-700 text-lg'>of clients assets</p>
                    </div>
                    <div className='w-1/3'>
                        <img className='mx-auto mb-5' src={Refresh} alt='...' />
                        <h1 className='text-center text-2xl text-slate-700'>100,000 clients</h1>
                        <p className='text-center text-slate-700 text-lg'>across 175 countries</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FourthLastDiv;
