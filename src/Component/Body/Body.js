import React from 'react';
import './Body.css'

const Body = () => {
    return (
        <div className='bg text-white'>

            <div className="md:p-32 p-6 py-20 bg">
                <div>

                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold">
                            Get Premium free for 1 month</h1>
                        <p className="py-6 md:text-2xl text-xl font-bold">Only $9.99/month after. Cancel anytime.</p>
                        <div className='mb-5 md:flex block gap-10 items-center text-center'>
                            <button className="btn bg-black px-8 py-3.5 rounded-3xl m-2 border-2 border-black ">Get Started</button>
                            <button id='button' className="btn  bg-transparent border-stone-50 border-2 uppercase ">Get Started</button>
                        </div>
                        <p className='text-xs font-semibold'><a className='underline hover:underline' href="/Terms and conditions">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;