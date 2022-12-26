import React from 'react';
// import ThirdLastDivImage from '../ThirdLastDivImage@2x.png';
function ThirdLastDiv() {
  return (
    <>
      <div className="bg-no-repeat bg-cover bg-[url('../src/ThirdLastDivImage@2x.png')] h-80 flex flex-col justify-center items-center bg-opacity-10">
        <div className='mb-28 mr-96 mt-12'>
          <h2 className='text-slate-50 uppercase font-semibold text-4xl'>Subscribe to our Newsletter</h2>
          <p className='text-slate-50 uppercase text-center text-xl mt-4 pb-8'>Sign up for our news letter</p>
          <div class="inline-flex justify-between bg-gray-100 rounded-full border-gray-200">
            <input type="email" placeholder="Enter your email address" value="" class="bg-transparent text-black px-24 focus:outline-none border-none" />
            <button class=" bg-gray-200 py-2 px-4 text-slate-50 bg-yellow-600 select-none rounded-full">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdLastDiv;
