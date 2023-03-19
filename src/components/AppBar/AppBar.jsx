import * as React from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { AppBar, Toolbar } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export function NavAppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static">
      <Toolbar variant="dense" style={{display:'flex',justifyContent:'space-between'}}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
}

export default NavAppBar;
