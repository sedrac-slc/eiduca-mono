
import Loading from 'Frontend/components/Loading.js';
import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

export default function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router} />
    </Suspense>
   );
}