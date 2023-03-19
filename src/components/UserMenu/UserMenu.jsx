import { Button, Typography } from "@mui/material";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logout } from "redux/AuthSlice/operations";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const UserMenu = () =>{
    const {user} = useAuth();
    const dispatch = useDispatch();

    return(
        <div>
            <Typography component='h3'variant="overline">Welcome, {user.name}</Typography>
            <Button style={{color:'white'}} variant="outlined" startIcon={<LogoutRoundedIcon />} type="button" onClick={() => dispatch(logout())}>LogOut</Button>
        </div>
    )
}