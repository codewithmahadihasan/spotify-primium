import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className="navbar bg-black text-white md:px-36  py-2">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl flex items-center"> <i className="fa-brands fa-spotify text-5xl"></i><h1 className='ml-2'>Spotify </h1> </a>

            </div>
            <div className=" gap-2">
                <div className='md:flex hidden gap-6 font-semibase md:text-xl '>
                    <a href="/premium">Premium</a>
                    <a href="/premium">Support</a>
                    <a href="/premium">Download</a>
                </div>
                <p className='mx-6  hidden md:inline'>|</p>

                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://avatars.githubusercontent.com/u/73072248?v=4" />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 md:hidden p-2 shadow menu menu-compact dropdown-content bg-teal-200 rounded-box text-black w-52">
                        <li>
                            <a className="justify-between">
                                Premium
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Support</a></li>
                        <li><a>Download</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="collapse-title font-base class md:text-xl">
                    <a href="/Profile">Profile <button><i className="fa-solid fa-angle-down ml-1"></i></button></a>
                </div>
            </div>
        </div>
    );
};

export default Nav;