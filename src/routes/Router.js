import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import LeadsInfo from '../custom/leadsInfo/LeadsInfo';
import FollowUpToday from '../custom/followUpToday/FollowUpToday';
import MissedFollowUp from '../custom/missedFollowUp/MissedFollowUp';
import OTBooking from '../custom/otBooking/OTBooking';
import LeadTracker from '../custom/leadTracker/LeadTracker';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const LoggedIn = Loadable(lazy(() => import('../views/authentication/LoggedIn')));
const Logout = Loadable(lazy(() => import('../views/authentication/Logout')));

// import LoginPage from 'src/devComponents/login/LoginPage';

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/loggedin', exact: true, element: <LoggedIn /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/leads-info', exact: true, element: <LeadsInfo /> },
      { path: '/follow-up-today', exact: true, element: <FollowUpToday /> },
      { path: '/missed-follow-up', exact: true, element: <MissedFollowUp /> },
      { path: '/ot-booking', exact: true, element: <OTBooking /> },
      { path: '/lead-tracker', exact: true, element: <LeadTracker /> },
      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: 'logout', element: <Logout /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
