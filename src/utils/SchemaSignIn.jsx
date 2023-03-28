import * as yup from 'yup';

const schemaSignIn = yup.object().shape({
  email: yup.string().email('Incorrect format').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, '​Password must be at least 8 characters'),
    remember: yup
    .boolean().default(false)
});

export default schemaSignIn;