import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar2 = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    if (typeof onLogout === 'function') {
      onLogout(); // Call the passed logout function only if it's a function
    } else {
      console.warn('onLogout is not a function');
    }
    navigate('/'); // Redirect to the home page after logout
  };
  return (
    <nav className="bg-blue-950 border-b border-secondary-color py-2 fixed w-full z-10 font-montserrat rounded-b-[15px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-h3 font-bold text-white">
            <span className="font-montserrat text-3xl lg:pl-12">Baymax</span>
          </Link>
          <div className="hidden md:flex space-x-4 lg:pr-12 mx-2">
            <Link to="/" className="text-white font-title text-menu uppercase">Home</Link>        
         
           
          </div>
           <button
        onClick={handleLogoutClick}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mb-4"
      >
        Logout
      </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar2