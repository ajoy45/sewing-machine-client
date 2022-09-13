import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
const Header = () => {
  return (
    <header>
      
      <div className="navbar bg-background">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-secondary lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
              <li className='text-secondary font-bold text-xl'><Link to='/home'>Home</Link></li>
              <li className='text-secondary font-bold text-xl'><Link to='/tools'>Tools</Link></li>
              <li className='text-secondary font-bold text-xl'><Link to='/about'>About</Link></li>
              <li className='text-secondary font-bold text-xl'><Link to='/blog'>Blog</Link></li>
              <li className='text-secondary font-bold text-xl'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <Link to='/' className=" btn-ghost normal-case text-xl ">
            <img width={100} height={100} src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className='text-secondary font-bold text-xl' ><Link to='/home'>Home</Link></li>

            <li className='text-secondary font-bold text-xl'><Link to='/tools'>Tools</Link></li>
            <li className='text-secondary font-bold text-xl'><Link to='/about'>About</Link></li>
            <li className='text-secondary font-bold text-xl'><Link to='/blog'>Blog</Link></li>
            <li className='text-secondary font-bold text-xl'><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="btn btn-primary text-secondary">Login</Link>
        </div>
      </div>
      
    </header>
  );
};

export default Header;