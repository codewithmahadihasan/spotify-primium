import React from 'react';
import CardShap from './CardShap';

const Cards = ({ pri }) => {
    // console.log(pri);
    const feautres = pri.feuture

    return (
        <div>
            <div class="rounded-xl w-72 bg-base-100 mx-auto">
                <div class="card-body">
                    <h1 className='bg-blue-500 p-1 w-1/2 text-center font-bold text-white rounded'>1 month free</h1>
                    <h2 class="card-title font-bold">{pri.name}</h2>
                    <p className='font-semibold'>$<span className='font-bold'>{pri.price}</span>/month after offer period <span className='font-bold'>{pri.account}</span> account</p>
                    <hr
                        className='h-0.5 bg-black'
                    />
                    <div className='md:h-72'>
                        {
                            feautres.map(feture => <CardShap feautres={feture}></CardShap>)
                        }
                    </div>
                    <div class=" mx-auto text-white">
                        <button class="bg-black px-14 py-3 hover:text-green-500  uppercase font-semibold  rounded-3xl">Get Started</button>
                    </div>
                    <div className='text-xs'>
                        <a className="underline" href="Terms and conditions apply."> Terms and conditions apply. </a> <p> 1 month free not available for users who have already tried Premium.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;