import { useState } from 'react';
import axios from 'axios';
import { useNavigate,NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img from "./image2.png";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', { username, email, password });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    }
  };

  return (
    <>
    <Navbar/>
     <div className="flex h-full bg-gradient-to-r from-blue-200 to-slate-100 py-12">
        {/* Left Section (Image) */}
        <div className="flex justify-end items-center w-1/2">
          <img src={img} alt="Login" className="w-2/3 h-2/3 object-cover rounded-lg mt-48" />
        </div>
    <div className="flex items-center w-1/2 mt-20">
          <div className="bg-amber-100 shadow-lg rounded-lg p-8 max-w-sm w-full border border-black">
    <h1 className="text-3xl font-semibold font-montserrat text-blue-950 text-center mb-6">Signup</h1>
      <form onSubmit={handleSubmit} className=" rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
         <div>
          Already have an account ? <NavLink to="/login" className="text-blue-500 hover:text-blue-700">Login</NavLink>
        </div>
      </form>
    </div>
    </div>
     </div>
    <Footer/>
    </>
    
  );
};

export default Signup;