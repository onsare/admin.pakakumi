import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Players from './content/applications/Players';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Auth = Loader(lazy(() => import('src/content/auth')));

// Dashboards

const Overview = Loader(lazy(() => import('src/content/dashboards/overview')));

// Applications

const Bets = Loader(lazy(() => import('src/content/applications/Bets')));
const Risk = Loader(lazy(() => import('src/content/applications/Risk')));
const Deposits = Loader(
  lazy(() => import('src/content/applications/Deposits'))
);
const Withdrawals = Loader(
  lazy(() => import('src/content/applications/Withdrawals'))
);

const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);
const AccountSettings = Loader(
  lazy(() => import('src/content/applications/Account/settings'))
);

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Auth />
      },

      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="overview" replace />
      },
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'bets',
        element: <Bets />
      },
      {
        path: 'deposits',
        element: <Deposits />
      },
      {
        path: 'withdrawals',
        element: <Withdrawals />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'bets',
        element: <Bets />
      },
      {
        path: 'player',
        element: <Players />
      },
      {
        path: 'risk',
        element: <Risk />
      }
    ]
  },
  {
    path: 'account',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="details" replace />
      },
      {
        path: 'user',
        element: <UserSettings />
      },
      {
        path: 'settings',
        element: <AccountSettings />
      }
    ]
  }
];

export default routes;
