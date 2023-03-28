import { Menu, MenuItem, Typography } from "@mui/material";
import { NavLinkStyled } from "components/App/App.styled";
import { useAuth } from "hooks/useAuth";
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link} from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
// import phoneBookSelectors from "redux/PhoneBookSlice/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsTablet } from "redux/PhoneBookSlice/slice";

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap:6px;
  color:rgb(28,118,210);
`

export const Navigation = () => {
  const {isLoggedIn,isRegistered} = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuBurger = (e) =>{
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleWindowWidth(){
    if(window.innerWidth >= 786) {
      return false;
    };
     return true;
  }
  
  const isTablet = handleWindowWidth();
  
    return(
        <nav style={{display:'flex',gap:'30px',color:'white'}}>

      {isTablet ? 
      <>
      <MenuIcon
            style={{ cursor: 'pointer' }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMenuBurger} />
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <StyledMenuItem component={Link} to='/' onClick={handleClose} ><HomeRoundedIcon fontSize="small" style={{transform:'rotate(-15deg)'}}/> Home</StyledMenuItem>
        {(isLoggedIn || isRegistered) && <StyledMenuItem onClick={handleClose} component={Link} to='/contacts'><ImportContactsRoundedIcon fontSize="small" style={{transform:'rotate(-15deg)'}}/> Contacts</StyledMenuItem>}
        
      </Menu>
        </>
      : 
      <>
      <NavLinkStyled  to="/" >
        <Typography component='h3' variant="h5" >Home</Typography>
      </NavLinkStyled>
        {(isLoggedIn || isRegistered) && 
        <>
        <NavLinkStyled  to="/contacts" >
        <Typography component='h3'variant="h5" >Contacts</Typography>
        </NavLinkStyled>
        </>
      }
      </>
      }
    
    </nav>
    )
}