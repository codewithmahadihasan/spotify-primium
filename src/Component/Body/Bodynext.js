import React from 'react';

const Bodynext = () => {
    return (
        <div>
            <div className=" py-20 text-center bg-base-200 ">
                <h1 className="text-5xl font-bold">Why go Premium?</h1>
                <div className='md:flex justify-around mt-20 mx-36 block '>
                    <div className='flex items-center gap-4 md:block m-4'>
                        <div><i className="fa-solid fa-music text-7xl bg-gray-200 p-10 rounded-full"></i></div>
                        <div>
                            <h3 className='text-xl font-bold'>Download music.</h3>
                            <p className='font-semibold'>Listen anywhere.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 md:block m-4'>
                        <div><i className="fa-regular fa-circle-xmark text-7xl bg-gray-200 p-10 rounded-full"></i></div>
                        <div>
                            <h3 className='text-xl font-bold'>Ad-free music listening.</h3>
                            <p className='font-semibold'>Play any song.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 md:block m-4'>
                        <div><i className="fa-solid fa-forward text-7xl bg-gray-200 p-10 rounded-full"></i></div>
                        <div>
                            <h3 className='text-xl font-bold'>Unlimited skips.</h3>
                            <p className='font-semibold'>Just hit next.</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 md:block m-4'>

                        <div><i className="fa-solid fa-circle-play text-7xl bg-gray-200 p-10 rounded-full"></i></div>
                        <div>
                            <h3 className='text-xl font-bold'>Play any song.</h3>
                            <p>Even on mobile.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bodynext;