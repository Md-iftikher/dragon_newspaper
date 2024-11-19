import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <div className="logo">
                <img className='w-300px ' src={logo} alt="Logo"/>
            </div>
            <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
            <p>{ moment().format('dddd,MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;