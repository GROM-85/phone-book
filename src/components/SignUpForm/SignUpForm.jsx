import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/AuthSlice/operations';
import { useEffect, useReducer, useState } from 'react';
import css from './SignUpForm.module.scss';

// MUI
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
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';



const initState = {
  name: '',
  email: '',
  password: '',
};
const formReducer = (state = initState, { target: { name, value } }) => ({
  ...state,
  [name]: value,
});

export const SignUpForm = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [inputValues, setInputValues] = useReducer(formReducer, initState);
  const { isRegistered } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ ...inputValues }));
    e.currentTarget.reset();
  };

  const handleAgreement = e => {
    const { checked } = e.target;
    setAgree(checked);
  };

  useEffect(() => {
    if (isRegistered) {
        navigate('/login', { replace: true });
      }
  },[navigate,isRegistered])
  

  const { name, email, password } = inputValues;
  const canSubmit = name && email && password.length > 5 && agree;

  return (
      <div className={css.paper}>
        <Avatar className={css.avatar}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
      <form className={css.form}   onSubmit={handleSubmit}>
        <FormGroup sx={{ gap: 2, width: '100%' }}>
          <TextField
            required
            fullWidth
            label="Username"
            variant="outlined"
            name="name"
            value={name}
            onInput={setInputValues}
            // placeholder="Enter your Name"
          />

          <TextField
            required
            label="Email"
            variant="outlined"
            // inputRef={emailInputRef}
            name="email"
            type='email'
            value={email}
            onInput={setInputValues}
            // placeholder="Enter your email"
          />
          <TextField
            required
            label="Password"
            variant="outlined"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onInput={setInputValues}
            InputProps={{endAdornment:
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }}
          />
          {/* <OutlinedInput
            label="Password"
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          /> */}

          <FormControlLabel
            control={<Checkbox checked={agree} onChange={handleAgreement} />}
            label="I agree with Terms & Conditions"
          />
          <Button
            disabled={!canSubmit}
            type="submit"
            variant="contained"
            // startIcon={isLoading && <CircularProgress size={16} />}
          >
            Sign Up
          </Button>
        </FormGroup>
        <Grid className={css.link}>
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
      </form>
      </div>
   
  );
};
