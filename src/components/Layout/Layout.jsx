import { NavAppBar } from 'components/AppBar/AppBar';
import { Fallback } from 'components/FallBack/Fallback';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


const SharedLayout = () => {
  return (
    <div >
      <NavAppBar/>
      <Suspense fallback={<Fallback/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
