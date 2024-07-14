import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import routeNames from './routeNames';

const HomeView = lazy(async () => import('Frontend/views/Home.js'));
const LoginView = lazy(async () => import('Frontend/views/Login.js'));

export const routes = [
    { path: '/', element: <HomeView />, id: routeNames.home },
    { path: '/login', element: <LoginView/>, id: routeNames.login },
] as RouteObject[];

export default createBrowserRouter(routes);

export function redirect(name: string): string | undefined{
    var url: RouteObject | undefined = routes.find(url =>  url.id == name);
    return url?.path ?? '/'
}