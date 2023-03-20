import { Typography } from "@mui/material";
import { NavLinkStyled } from "components/App/App.styled";
import { useAuth } from "hooks/useAuth";
import MenuIcon from '@mui/icons-material/Menu';
import { useMemo} from "react";
// import phoneBookSelectors from "redux/PhoneBookSlice/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { setIsTablet } from "redux/PhoneBookSlice/slice";

export const Navigation = () => {
  const {isLoggedIn,isRegistered} = useAuth();
  // const [isTablet,setTablet] = useState(false);
  // const isTabletWidth = useSelector(phoneBookSelectors.getIsTabletWidth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(window.innerWidth);
  //   function handleWindowWidth(){
  //     if(window.innerWidth >= 786) {
  //       dispatch(setIsTablet(false));
  //       setTablet(false);
  //       return
  //     };
  //       dispatch(setIsTablet(true));
  //       setTablet(true);
  //   }
  //   handleWindowWidth();
  //   // window.addEventListener('load',handleWindowWidth);
  //   // return () => window.removeEventListener('load',handleWindowWidth)
  // },[]);

  function handleWindowWidth(){
    if(window.innerWidth >= 786) {
      return false;
    };
     return true;
  }
  const isTablet = useMemo(() => handleWindowWidth(),[]);

  console.log('isTablet',isTablet)
    return(
        <nav style={{display:'flex',gap:'30px',color:'white'}}>

      {isTablet ? 
      <MenuIcon/> : 
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