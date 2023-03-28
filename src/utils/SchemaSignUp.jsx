import * as yup from 'yup';

const schemaSignUp = yup.object().shape({
  name: yup.string().required('Username is required'),
  email: yup.string().required('Email is required').email('Incorrect format'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, '​Password must be at least 8 characters'),
  passwordConfirm: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Password must match'),
    termsCheck: yup
    .boolean()
    .oneOf([true], "Required terms of use")
    .required("Required terms of use"),
});

export default schemaSignUp;
