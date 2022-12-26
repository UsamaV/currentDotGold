import React from 'react';
import linstar from '../client_linstar.png';
import devnco from '../client_devnco.png';
import client from '../client-3-215x95.png';


function SecondLastDiv() {
    return (
        <React.Fragment>
            <div>
            <div className='container my-16'>
                <div className='flex justify-center'>
                    <img src={linstar} alt='...' />
                    <img src={devnco} alt='...' />
                    <img src={client} alt='...' />
                    <img src={linstar} alt='...' />
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default SecondLastDiv;
