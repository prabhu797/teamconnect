import { CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from '../src/routes/Router';

import { baselightTheme } from "./theme/DefaultColors";
import { useEffect, useState } from 'react';
import LoggedIn from './views/authentication/LoggedIn';
import { FrappeProvider } from 'frappe-react-sdk';

function App() {

  const [token, setToken] = useState(localStorage.getItem("access_token"));
  const routing = useRoutes(Router);
  const theme = baselightTheme;

  function getAccessToken() {
  return token;
}

  return (
    <>
      <FrappeProvider
        url='https://novelhouston.com'
        socketPort='9000'
        tokenParams={{ useToken: true, type: "Bearer", token: getAccessToken }}
      >
        <ThemeProvider theme={theme}>

          <CssBaseline />
          {routing}

        </ThemeProvider>
      </FrappeProvider>

      <Stack sx={{display:"none"}}>
        <LoggedIn setToken={setToken} />
      </Stack>
    </>

  );
}

export default App;
