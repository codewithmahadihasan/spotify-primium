import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className="navbar bg-black text-white md:px-36  py-2">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case md:text-3xl text-xl flex items-center" href="https://open.spotify.com/"> <i className="fa-brands fa-spotify text-3xl md:text-5xl"></i><h1 className='ml-2'>Spotify </h1> </a>

            </div>
            <div className=" gap-2">
                <div className='md:flex hidden gap-6 font-semibase md:text-xl '>
                    <a href="https://www.spotify.com/us/premium/">Premium</a>
                    <a href="https://support.spotify.com/bd-en/">Support</a>
                    <a href="https://www.spotify.com/us/download/">Download</a>
                </div>
                <p className='mx-6  hidden md:inline'>|</p>
                <div className="dropdown md:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        <li><a>Premium</a></li>
                        <li><a>Support</a></li>
                        <li><a>Download</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-end">

                    <div className="menu menu-horizontal font-bold p-0">

                        <li tabIndex={0}>
                            <a>
                                <div className="avatar p-2">
                                    <label tabIndex="0" className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <div className="md:w-10 w-6 rounded-full">
                                            <img className='rounded-full' src="https://avatars.githubusercontent.com/u/73072248?v=4" />
                                        </div>
                                    </label>
                                </div>
                                Profile
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="px-4 py-2 w-36 bg-white cursor-pointer text-black font-bold">
                                <a className="px-4 py-2 ">Account</a>
                                <a className="px-4 py-2">Log out</a>
                            </ul>
                        </li>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Nav;