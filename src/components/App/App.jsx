import React, {lazy, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/AuthSlice/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'))
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing,isLoggedIn} = useAuth();

  useEffect(() => {
    // if(!isLoggedIn) return;
    dispatch(refreshUser())
  },[dispatch,isLoggedIn])

  return (
      (!isRefreshing && <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts'/>}/>
          <Route path='register' element={<RestrictedRoute component={<RegisterPage/>} redirectTo='/contacts'/>}/>
          <Route path='contacts' element={<PrivateRoute component={<ContactsPage/>} redirectTo='/login'/>}/>
        </Route>
      </Routes>)
)};
