import React from 'react';
import './Body.css'

const Body = () => {
    return (
        <div className='bg text-white'>

            <div className="p-32 bg">
                <div className=" ">

                    <div>
                        <h1 className="text-5xl  font-bold">
                            Get Premium free for 1 month</h1>
                        <p className="py-6 text-2xl font-bold">Only $9.99/month after. Cancel anytime.</p>
                        <div className='mb-5 flex gap-10'>
                            <button className="btn bg-black px-8 py-3.5 rounded-3xl">Get Started</button>
                            <button id='button' className=" jala bg-transparent border-stone-50 border-2 uppercase ">Get Started</button>
                        </div>
                        <p ><a className='underline' href="/Terms and conditions">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;