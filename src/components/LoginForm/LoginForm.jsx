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
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/AuthSlice/operations';
import css from './LoginForm.module.scss';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import {Visibility, VisibilityOff } from '@mui/icons-material';
import {  useState } from 'react';
import schemaSignIn from 'utils/SchemaSignIn';

const initState = {
  email: '',
  password: '',
  remember:false,
};
// const formReducer = (state = initState, { _, target: { name, value } }) => {
//   return { ...state, [name]: value };
// };

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const [remember,setRemember] = useState(false);
  // const [inputValues, dispatchInputs] = useReducer(formReducer, initState);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues:initState,
    validationSchema:schemaSignIn,
    onSubmit:(values,actions) => {
      dispatch(login({ ...values }));
      actions.resetForm();
    }
  })

  const handleClickShowPassword = () => setShowPassword( show => !show);
  // const handleRemember = ({target:{checked}}) => setRemember(checked);
  
  
  // const { email, password } = inputValues;
  // const canSubmit = email && password.length > 5
  const {handleChange,handleSubmit,errors,touched} = formik;
  const {email,password,remember} = formik.values;
  return (
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
            fullWidth
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            error={Boolean(errors.email) && Boolean(touched.email)}
            helperText={Boolean(touched.email) && errors.email}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            name="password"
            type={showPassword ?'text': 'password'}
            value={password}
            error={Boolean(errors.password) && Boolean(touched.password)}
            helperText={Boolean(touched.password) && errors.password}
            onChange={handleChange}
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
            control={<Checkbox checked={remember} onChange={handleChange} />}
            name='remember'
            label="Remember me"
          />
          
          <Button 
          // disabled={!isValid || !dirty}  !IMPORTANT =>DONT USE DIABLE IN THIS VARIANT
          type="submit"
           variant="contained">
            Sign In
          </Button>
          <Grid className={css.link}>
            <Grid item>
              <Link href="register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </FormGroup>
      </form>
    </div>
  );
};
