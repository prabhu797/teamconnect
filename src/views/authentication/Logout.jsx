import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Logout() {

    const navigate = useNavigate();

    useEffect(() => {
        // Step 1: Remove the access_token from localStorage
        localStorage.removeItem('access_token');

        // Step 2: Create an iframe to handle the logout in the background
        // const iframe = document.createElement('iframe');
        // iframe.style.display = 'none'; // Hide the iframe
        // iframe.src = 'http://localhost:8000/?cmd=web_logout';
        
        // Append the iframe to the document
        // document.body.appendChild(iframe);

        // Step 3: Redirect the main window to the login page
        setTimeout(() => {
            navigate("/dashboard");
        }, 1000);
    }, []);

    return (
        <div>Logging out...</div>
    );
}
