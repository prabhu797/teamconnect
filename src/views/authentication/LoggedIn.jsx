import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const SECRET_PASSKEY = "P@r7a9b9h7U";

export default function LoggedIn({ setToken }) {
    const location = useLocation();
    const navigate = useNavigate();
    const clientId = "2l9s5n1pj1";
    const frappeServer = "novelhouston.com"
    const redirectURL = "http://10.80.3.70:8080/loggedin";

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
            console.log("Actual Code", code);

            fetch(`https://${frappeServer}/api/method/frappe.integrations.oauth2.get_token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'authorization_code',
                    code: code,
                    redirect_uri: redirectURL,
                    client_id: clientId,
                }),
            })
                .then((res) => {
                    return res.json();
                })
                .then((response) => {
                    console.log("Data = ", response);
                    localStorage.setItem('access_token', response.access_token);
                    setToken(response.access_token);
                })
                .catch((err) => {
                    console.log(err);
                })

            // const encrpitedCode = CryptoJS.AES.encrypt(JSON.stringify(data.access_token), SECRET_PASSKEY).toString();
            // console.log("Encrypted Code", encrpitedCode);

            // Redirect to /dashboard
            navigate('/dashboard');
        } else {
            // Handle case where 'code' is missing or invalid
            console.error('No code parameter found in the URL');
            // Optionally redirect to an error page
        }
    }, []);

    return (
        <div>LoggedIn</div>
    );
}
