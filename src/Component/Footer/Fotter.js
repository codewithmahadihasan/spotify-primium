import React from 'react';
import './Fotter.css'

const Fotter = () => {
    return (
        <div >
            <footer className=" p-10 bg-black text-white p-20 ">
                <div className=' md:text-start rounded md:flex justify-between'>
                    <div>
                        <div className="flex-1">
                            <a target="_blank" className="btn btn-ghost normal-case text-3xl flex items-center"> <i className="fa-brands fa-spotify text-5xl"></i><h1 className='ml-2'>Spotify </h1> </a>

                        </div>
                    </div>
                    <div className='md:text-start m-4  text-center'>
                        <span className="footer-title ">COMPANY</span>
                        <a target="_blank" className=" cursor-pointer font-semibold  block">About</a>
                        <a target="_blank" className=" cursor-pointer font-semibold  block">Jobs</a>
                        <a target="_blank" className=" cursor-pointer font-semibold  block">For the Record</a>
                    </div>
                    <div className='md:text-start m-4  text-center'>
                        <span className="footer-title">COMMUNITIES</span>
                        <a target="_blank" className=" cursor-pointer font-semibold block">For Arists</a>
                        <a target="_blank" className=" cursor-pointer font-semibold block">Developers</a>
                        <a target="_blank" className=" cursor-pointer font-semibold block">Advertising</a>
                        <a target="_blank" className=" cursor-pointer font-semibold block">Investors</a>
                        <a target="_blank" className=" cursor-pointer font-semibold block">Vendors</a>
                    </div>
                    <div className='md:text-start m-4  text-center'>
                        <span className="footer-title">USEFUL LINKS</span>
                        <a target="_blank" className=" cursor-pointer font-semibold block">Support</a>
                        <a target="_blank" className=" cursor-pointer font-semibold block">Web Player</a>
                        <a target="_blank" className=" cursor-pointer font-semibold block">Free Mobile App</a>
                        <a target="_blank" className=" cursor-pointer font-semibold block">Car Thing</a>
                    </div>
                    <div className='flex justify-center gap-4'>
                        <a target="_blank" href="https://www.instagram.com/loneliness_mahadi/"> <i class="fa-brands fa-instagram bg-gray-900 text-3xl px-3 py-2 rounded-full"></i></a>
                        <a target="_blank" href="https://www.facebook.com/mahadi.loneliness"><i class="fa-brands fa-facebook-f bg-gray-900 text-3xl px-4 py-2 rounded-full"></i></a>
                        <a target="_blank" href="https://github.com/loneliness-mahadi"> <i class="fa-brands fa-github bg-gray-900 text-3xl px-3 py-2 rounded-full"></i></a>
                    </div>
                </div>
                <div className='md:mt-20 mt-5 text-xs md:flex text-center md:text-start justify-between align-center'>
                    <div className='flex gap-5 text-gray-400'>
                        <a target="_blank" href="/">Ligal</a>
                        <a target="_blank" href="/">Privacy Center</a>
                        <a target="_blank" href="/">Privacy Policy</a>
                        <a target="_blank" href="/">Cokkies</a>
                        <a target="_blank" href="/">About Ads</a>
                        <a target="_blank" href="/"> Additional CA Privacy Diisclosures</a>
                    </div>
                    <div className='text-gray-400 mt-3 md:mt-0'>
                        <i className="fa-solid fa-earth-americas"></i> Bangladesh
                        <p className='mt-2'>Copyright © 2022 - Mahadi Hasan</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Fotter;