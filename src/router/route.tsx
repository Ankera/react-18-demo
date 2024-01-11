import React, { lazy } from 'react';

import { Navigate } from 'react-router-dom';
import Home from '@/view/home'
import About from '@/view/about';
import Page1 from '@/view/page1';
import Page2 from '@/view/page2';
// import User from '@/view/user';

// eslint-disable-next-line react-refresh/only-export-components
const User = lazy(() => import('@/view/user'))

const routes = [
  {
    path: '/',
    element: <Navigate  to="/page1" />
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: <Page1 />,
      },
      {
        path: '/page2',
        element: <Page2 />,
      }
    ],
  },
  
  {
    path: '/about',
    element: <About />
  },

  {
    path: '/user',
    element: <React.Suspense fallback={<div>loading</div>}>
      <User />
    </React.Suspense>
  },
  
];

export default routes;