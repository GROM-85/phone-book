import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'redux/AuthSlice/operations';
import css from './LoginForm.module.scss';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import {Visibility, VisibilityOff } from '@mui/icons-material';
import { useReducer, useState } from 'react';

const initState = {
  email: '',
  password: '',
};
const formReducer = (state = initState, { _, target: { name, value } }) => {
  return { ...state, [name]: value };
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [remember,setRemember] = useState(false);
  const [inputValues, dispatchInputs] = useReducer(formReducer, initState);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword( show => !show);
  const handleRemember = ({target:{checked}}) => setRemember(checked);
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ ...inputValues }));
  };
  const { email, password } = inputValues;
  const canSubmit = email && password.length > 5
  return (
    //   <form className='' onSubmit={handleSubmit} autoComplete="off">
    //         <label className=''>
    //             Email
    //             <input type="email" name="email" />
    //         </label>
    //         <label className=''>
    //             Password
    //             <input type="password" name="password" />
    //         </label>
    //         <button type="submit">Log In</button>

    //     </form>
    <div className={css.paper}>
      <Avatar className={css.avatar}>
        <LockOpenOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <form action="" className={css.form}  onSubmit={handleSubmit} >
        <FormGroup sx={{ gap: 2, width: '100%' }}>
          <TextField
            required
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={email}
            onChange={dispatchInputs}
          />
          <TextField
            required
            fullWidth
            label="Password"
            variant="outlined"
            name="password"
            type={showPassword ?'text': 'password'}
            value={password}
            onChange={dispatchInputs}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox checked={remember} onChange={handleRemember} />}
            label="Remember me"
          />
          
          <Button disabled={!canSubmit} type="submit" variant="contained">
            Sign In
          </Button>
          <Grid className={css.link}>
            <Grid item>
              <Link href="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </FormGroup>
      </form>
    </div>
  );
};
