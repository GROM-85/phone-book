import { Helmet } from 'react-helmet';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <SignUpForm />
    </div>
  );
}