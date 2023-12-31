import React from 'react';
import * as ReactDOM  from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { RegistrationProvider } from './contexts/RegistrationContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignUp } from './pages/sign-up/SignUp';
import { UnderConstruction } from './pages/under-construction/UnderConstruction';
import { NotFound } from './pages/not-found/NotFound';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
  },
  {
    path: 'under-construction',
    element: <UnderConstruction />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
window.addEventListener('beforeunload', () => {
  // Remove data from local storage when the window is about to close
  localStorage.removeItem('userId');
  localStorage.removeItem('missing_fields');
});

const rootNode = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
         <RegistrationProvider>
          <RouterProvider router={router} />
       </RegistrationProvider>
        <ToastContainer />
  </React.StrictMode>
  , rootNode);
