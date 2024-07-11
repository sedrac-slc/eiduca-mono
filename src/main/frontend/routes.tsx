import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomeView = lazy(async () => import('Frontend/views/Home.js'));
const AboutView = lazy(async () => import('Frontend/views/About.js'));
const LoginView = lazy(async () => import('Frontend/views/Login.js'));

const load = (view: string) => lazy(async () => import(`Frontend/views/${view}.js`));

export const routes = [
    { path: '/', element: <HomeView /> },
    { path: '/about', element: <AboutView /> },
    { path: '/login', element: <LoginView/> },
] as RouteObject[];

export default createBrowserRouter(routes);