import { useState, useEffect } from 'react';
import baymax from './baymax.png';
import Navbar from './Navbar';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Hi, this is Baymax, your personal healthcare companion.";
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    let timeout;
    if (!isDeleting && text !== fullText) {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text !== '') {
      timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, deletingSpeed);
    } else if (text === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (text === '' && isDeleting) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-green-300 to-blue-100 font-montserrat font-bold  px-6 border border-green-500">
        <div className="container px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section (Image) */}
          <div className="flex justify-center md:justify-start">
            <img src={baymax} alt="Baymax" className="w-3/4 h-auto object-contain" />
          </div>

          {/* Right Section (Text and Button) */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Empowering Your Health with AI-Driven Care</h1>
            <p className="text-xl mb-4">
              Revolutionizing healthcare with advanced AI technology. Discover personalized health solutions, chat with our health support bot, and take charge of your well-being.
            </p>
            <div className="text-xl mb-4">
              <span>{text}</span>
              <span className="animate-blink">|</span>
            </div>
            <button className="mt-6 bg-blue-950 text-white px-4 py-2 rounded hover:scale-110 transition duration-300">
             Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
