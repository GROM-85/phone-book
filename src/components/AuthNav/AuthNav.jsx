import { Typography } from '@mui/material';
import { NavLinkStyled } from 'components/App/App.styled';

export const AuthNav = () => {
  return (
    <div style={{display:'flex',gap:'20px',textDecoration:'none'}}>
      <NavLinkStyled to="/register"><Typography component='h3'variant="overline" >Sign Up</Typography></NavLinkStyled>
      <NavLinkStyled to="/login" style={{textDecoration:'none', color:'white'}}><Typography component='h3'variant="overline" >Sign In</Typography></NavLinkStyled>
    </div>
  );
};
