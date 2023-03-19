import { NavAppBar } from 'components/AppBar/AppBar';
import { Fallback } from 'components/FallBack/Fallback';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';


const SharedLayout = () => {
  return (
    <div >
      <NavAppBar/>
      <Suspense fallback={<Fallback/>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SharedLayout;
