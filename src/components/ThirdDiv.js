import React from 'react';
import ThirdDivImage from '../ThirdDivImage@2x.png';


function ThirdDiv() {
  return (
    <React.Fragment>
        <div className='relative'>
        <img src={ThirdDivImage} alt=''/>
        <div className='top-2/3 right-2/4 absolute text-white'>
            <h1 className='text-xl font-bold'>Gold Exhibition Proudly Presented by Current Gold</h1>
            <p className='text-base text-center'>Starting From 10-12-2022</p>
        </div>
        </div>
      
      
    </React.Fragment>
  );
}

export default ThirdDiv;