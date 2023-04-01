import { useDispatch } from 'react-redux';
import { register } from 'redux/AuthSlice/operations';
import css from './SignUpForm.module.scss';
import { Formik, Field, Form} from 'formik';
import schemaSignUp from 'utils/SchemaSignUp';

// MUI
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useState } from 'react';

const initState = {
  name:'',
  email:'',
  password:'',
  passwordConfirm:'',
  termsCheck:false,
};

// const formReducer = (state = initState, { target: { name, value } }) => ({
//   ...state,
//   [name]: value,
// });

export const SignUpForm = () => {
  const dispatch = useDispatch();
  // const [agree, setAgree] = useState(false);
  // const formik = useFormik();
  // const [inputValues, setInputValues] = useReducer(formReducer, initState);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = (values, actions) => {
    console.log('values', values);
    // console.log('inputsValues', inputValues);
    const { resetForm } = actions;
    dispatch(register({...values }));
    resetForm({
      values:initState,
    });
  };

  // const handleAgreement = e => {
  //   const { checked } = e.target;
  //   setAgree(checked);
  // };

 
  // const { name, email, password, confirmPassword } = inputValues;
  // const canSubmit = name && email && password.length > 5 && agree;

  return (
    <div className={css.paper}>
      <Avatar className={css.avatar}>
        <LockOpenOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initState}
        validationSchema={schemaSignUp}
      >
        {({ errors, touched, isValid, dirty ,values ,handleChange}) => (
          <Form className={css.form}> 
            <FormGroup sx={{ gap: 2, width: '100%' }}>
              <Field
                error={Boolean(errors.name) && Boolean(touched.name)}
                helperText={Boolean(touched.name) && errors.name}
                as={TextField}
                fullWidth
                label="Username"
                variant="outlined"
                name="name"
                type="text"
                // value={name}
                // onInput={setInputValues}
                // placeholder="Enter your Name"
              />

              <Field
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
                as={TextField}
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                // value={email}
                // onInput={setInputValues}
                // placeholder="Enter your email"
              />
              <Field
               
                error={Boolean(errors.password)&& Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
                as={TextField}
                label="Password"
                variant="outlined"
                name="password"
                type={showPassword ? 'text' : 'password'}
                // value={password}
                // onInput={setInputValues}
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
              <Field
                
                error={Boolean(errors.confirmPassword) && Boolean(touched.passwordConfirm)}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword : ''
                }
                as={TextField}
                label="Confirm Password"
                variant="outlined"
                name="passwordConfirm"
                type={showPassword ? 'text' : 'password'}
                // value={confirmPassword}
                // onInput={setInputValues}
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
                control={
                  <Field
                    as={Checkbox}
                    checked={values.termsCheck}
                    onChange={handleChange}
                    name="termsCheck"
                  />
                }
                label="I agree with Terms & Conditions"
                name="termsCheck"
              />
              <FormHelperText error={Boolean(errors.termsCheck) && Boolean(touched.termsCheck)}>
                {Boolean(touched.termsCheck) && errors.termsCheck}
              </FormHelperText>
              <Button
                disabled={!isValid || !dirty}
                type="submit"
                variant="contained"
                // startIcon={isLoading && <CircularProgress size={16} />}
              >
                Sign Up
              </Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
      <Grid className={css.link}>
        <Grid item>
          <Link href="login" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
