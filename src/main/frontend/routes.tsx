import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomeView = lazy(async () => import('Frontend/views/Home.js'));
const AboutView = lazy(async () => import('Frontend/views/About.js'));
const LoginView = lazy(async () => import('Frontend/views/Login.js'));

export const routes = [
    { path: '/', element: <HomeView /> },
    { path: '/about', element: <AboutView /> },
    { path: '/login', element: <LoginView/> },
] as RouteObject[];

export default createBrowserRouter(routes);