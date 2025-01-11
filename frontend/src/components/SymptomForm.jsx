import { useState } from 'react';
import axios from 'axios';

const SymptomForm = () => {
  const [symptoms, setSymptoms] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSymptomChange = (event) => {
    setSymptoms(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const symptomList = symptoms.split(',').map(symptom => symptom.trim()).filter(symptom => symptom !== '');
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/predict/', { symptoms: symptomList });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Error occurred while predicting.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={symptoms}
          onChange={handleSymptomChange}
          placeholder="Enter symptoms separated by commas (e.g., fever, headache, cough)"
          rows={4}
          className="w-full p-2 border border-slate-500 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Predict Disease
        </button>
      </form>
      {prediction && <p className="text-center text-gray-700 font-semibold">{`Predicted Disease: ${prediction}`}</p>}
    </div>
  );
};

export default SymptomForm;
