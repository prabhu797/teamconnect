import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoggedIn() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to get query parameters
    const getQueryParam = (param) => {
      const urlParams = new URLSearchParams(location.search);
      return urlParams.get(param);
    };

    // Extract the code from the URL
    const code = getQueryParam('code');
    
    if (code) {
      // Set the access_token in localStorage
      localStorage.setItem('access_token', code);

      // Redirect to /dashboard
      navigate('/dashboard');
    } else {
      // Handle case where 'code' is missing or invalid
      console.error('No code parameter found in the URL');
      // Optionally redirect to an error page
    }
  }, [location.search, navigate]);

  return (
    <div>LoggedIn</div>
  );
}
