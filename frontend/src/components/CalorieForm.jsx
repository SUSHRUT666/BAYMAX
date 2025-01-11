import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CalorieForm = () => {
  const [food, setFood] = useState('');
  const [calorieData, setCalorieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/calorie-count/', { food });
      setCalorieData(response.data);
    } catch (err) {
      setError('Unable to fetch calorie data. Please try again.');
    }
    setLoading(false);
  };

  // const handleLogoutClick = () => {
  //   if (typeof onLogout === 'function') {
  //     onLogout(); // Call the passed logout function only if it's a function
  //   } else {
  //     console.warn('onLogout is not a function');
  //   }
  //   navigate('/'); // Redirect to the home page after logout
  // };

  return (
     <div>
       {/* <button
        onClick={handleLogoutClick}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mb-4"
      >
        Logout
      </button> */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter a food item"
          required
          className="border border-gray-300 p-2 rounded-md w-full mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
        >
          {loading ? 'Loading...' : 'Get Calorie Count'}
        </button>
      </form>
      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-md mb-4">
          {error}
        </div>
      )}
      {calorieData && calorieData.items && calorieData.items.length > 0 && (
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Results for: {food}</h2>
          <p><strong>Calories:</strong> {calorieData.items[0].calories}</p>
          <p><strong>Serving Size:</strong> {calorieData.items[0].serving_size_g}g</p>
          <p><strong>Protein:</strong> {calorieData.items[0].protein_g}g</p>
          <p><strong>Fat:</strong> {calorieData.items[0].fat_total_g}g</p>
          <p><strong>Carbohydrates:</strong> {calorieData.items[0].carbohydrates_total_g}g</p>
        </div>
      )}
    </div>
  );
};

CalorieForm.propTypes = {
  onLogout: PropTypes.func
};

CalorieForm.defaultProps = {
  onLogout: () => console.warn('onLogout function not provided')
};

export default CalorieForm;