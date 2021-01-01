import React from 'react';
import { Navigate } from 'react-router-dom';
import AppLayout from 'src/modules/app/layouts/AppLayout';
import MainLayout from 'src/modules/app/layouts/MainLayout';
import LoginView from 'src/modules/auth/views/LoginView';
import RegisterView from 'src/modules/auth/views/RegisterView';
import CustomerDetailView from 'src/modules/customer/views/CustomerDetailView';
import CustomerListView from 'src/modules/customer/views/CustomerIndexView';
import NotFoundView from 'src/modules/errors/NotFoundView';
import MyPreferences from 'src/modules/my/views/MyPreferences';
import MyProfileView from 'src/modules/my/views/MyProfileView';
import ProductDetailView from 'src/modules/product/views/ProductDetailView';
import ProductListView from 'src/modules/product/views/ProductIndexView';
import SettingsView from 'src/modules/settings/views/SettingsView';

const routes = [
  {
    path: 'app',
    element: <AppLayout />,
    children: [
      {
        path: 'stocks',
        element: <CustomerListView />,
        children: [{ path: '/:id', element: <CustomerDetailView /> }]
      },
      {
        path: 'research',
        children: [
          { path: '/', element: <ProductListView /> },
          { path: '/:id', element: <ProductDetailView /> }
        ]
      },
      {
        path: 'divTracker',
        element: <CustomerListView />,
        children: [{ path: '/:id', element: <CustomerDetailView /> }]
      },
      {
        path: 'my',
        children: [
          { path: '/profile', element: <MyProfileView /> },
          { path: '/preferences', element: <MyPreferences /> }
        ]
      },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/stocks" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
