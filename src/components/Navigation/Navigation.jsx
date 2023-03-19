import { Typography } from "@mui/material";
import { NavLinkStyled } from "components/App/App.styled";
import { useAuth } from "hooks/useAuth";

export const Navigation = () =>{
  const {isLoggedIn} = useAuth();
    return(
        <nav style={{display:'flex',gap:'30px',color:'white'}}>
      <NavLinkStyled  to="/" >
        <Typography component='h3' variant="h5" >Home</Typography>
      </NavLinkStyled>
        {isLoggedIn && <NavLinkStyled  to="/contacts" >
        <Typography component='h3'variant="h5" >Contacts</Typography>
        </NavLinkStyled>}
    
    </nav>
    )
}