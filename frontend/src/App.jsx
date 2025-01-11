import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dash from './pages/Dash';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const getAuthToken = () => localStorage.getItem('authToken'); 


function App() {
  const [authenticated, setAuthenticated] = useState(getAuthToken() !== null);

  useEffect(() => {
    const checkAuth = () => {
      const token = getAuthToken();
      setAuthenticated(token !== null);
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthenticated(false);
  };
  return (

    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dash" element ={<Dash/>}/>
        <Route
          path="/dashboard"
          element={
            authenticated ? (
              <Dash onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
    </>
     
    
  );
}

export default App;