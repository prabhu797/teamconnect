import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FrappeProvider } from 'frappe-react-sdk';

function getAccessToken() {
  return localStorage.getItem("access_token");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <BrowserRouter basename='/'>
      <FrappeProvider
        url='http://localhost:8000/'
        socketPort='9000'
        tokenParams={{ useToken: true, type: "Bearer", token: getAccessToken }}
      >
        <App />
      </FrappeProvider>
    </BrowserRouter>
  </Suspense>
);
