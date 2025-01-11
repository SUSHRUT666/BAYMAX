import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 border-b border-secondary-color py-2 fixed w-full z-10 font-montserrat rounded-b-[15px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-h3 font-bold text-white">
            <span className="font-montserrat text-3xl lg:pl-12">Baymax</span>
          </Link>
          <div className="hidden md:flex space-x-4 lg:pr-12 mx-2">
            <Link to="/" className="text-white font-title text-menu uppercase">Home</Link>
            <Link to="/" className="text-white font-title text-menu uppercase">Features</Link>
            <Link to="/" className="text-white font-title text-menu uppercase">How it works</Link>
          </div>
          <div className="flex items-center space-x-4 lg:pr-12">
            <Link to="/login" className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A4.002 4.002 0 008 21h8a4.002 4.002 0 002.879-3.196M15 11a3 3 0 10-6 0 3 3 0 006 0zm4-7a2 2 0 00-2-2h-4a2 2 0 00-2 2v1h8V4z"
                />
              </svg>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block text-white font-title text-menu uppercase py-2 px-4">Home</Link>
          <Link to="/features" className="block text-white font-title text-menu uppercase py-2 px-4">Features</Link>
          <Link to="/how-it-works" className="block text-white font-title text-menu uppercase py-2 px-4">How it works</Link>
          <Link to="/login" className="block text-white font-title text-menu uppercase py-2 px-4">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
