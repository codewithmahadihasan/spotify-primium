import React from 'react';
import Cards from './Card';

const Primium = () => {
    const primiums = [
        {
            id: 1,
            name: 'Individual',
            price: 9.99,
            account: 1,
            feuture: [
                'Ad-free music listening',
                'Play anywhere - even offline',
                'On-demand playback'
            ]
        },
        {
            id: 2,
            name: 'Duo',
            price: 12.99,
            account: 2,
            feuture: [
                '2 Premium accounts for a couple under one roof',
                'Play anywhere - even offline',
                'On-demand playback'
            ]
        },
        {
            id: 3,
            name: 'Family',
            price: 15.99,
            account: 6,
            feuture: [
                '6 Premium accounts for family members living under one roof',
                'Block explicit music',
                'Ad- free music listening, play offline, on - demand playback',
                'Spotify Kids: a separate app made just for kids'
            ]
        },
        {
            id: 4,
            name: 'Student',
            price: 4.99,
            account: 1,
            feuture: [
                'Hulu(ad- supported) plan',
                'SHOWTIME',
                'Ad - free music listening',
                'Play anywhere - even offline',
                'On - demand playback'
            ]
        }
    ]
    return (
        <div className=' bg-gray-300 py-32 px-20'>
            <div className='text-center mb-10'>
                <h1 className="text-5xl font-bold mb-4">Pick your Premium</h1>
                <p>Listen without limits on your phone, speaker, and other devices.</p>
                <div className='flex justify-center gap-4 mt-4'>
                    <img className='w-8 rounded bg-white p-1 h-5' src="https://www.lebanonfcu.org/wp-content/uploads/2016/12/visa-logo.png" alt="" />
                    <img className='w-8 rounded bg-white  h-5' src="https://www.watsonswine.com/_ui/desktop/theme-wine/img/img_payment_card_mastercard.png" alt="" />
                    <img className='w-8 rounded bg-white  h-5' src="https://www.icone-png.com/png/51/51399.png" alt="" />
                    <img className='w-8 rounded   h-5' src="https://www.watsonswine.com/_ui/desktop/theme-wine/img/img_payment_card_mastercard.png" alt="" />
                </div>
            </div>
            <div className='flex justify-center gap-4 flex-col md:flex-row '>

                {
                    primiums.map(pri => <Cards key={pri.id} pri={pri}></Cards>)
                }
            </div>
        </div>


    );


};

export default Primium;