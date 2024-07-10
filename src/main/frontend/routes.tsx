import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const HomeView = lazy(async () => import('Frontend/views/Home.js'));
const AboutView = lazy(async () => import('Frontend/views/About.js'));

export const routes = [
    { path: '/', element: <HomeView /> },
    { path: '/about', element: <AboutView /> },
] as RouteObject[];

export default createBrowserRouter(routes);