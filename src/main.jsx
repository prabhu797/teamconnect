import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { FrappeProvider } from 'frappe-react-sdk';
import CryptoJS from 'crypto-js';

const SECRET_PASSKEY = "P@r7a9b9h7U";

// function getAccessToken() {
//   return localStorage.getItem("access_token");
//   let ecryptedCode = localStorage.getItem("access_token");
//   if (ecryptedCode) {
//     const bytes = CryptoJS.AES.decrypt(ecryptedCode, SECRET_PASSKEY);
//     const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//     return data;
//   } else {
//     return ""
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <BrowserRouter basename='/teamconnect'>

        <App />
    </BrowserRouter>
  </Suspense>
);
