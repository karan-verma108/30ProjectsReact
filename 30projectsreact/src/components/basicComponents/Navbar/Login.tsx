import { withFormik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { RegisterFormikValues } from './Register';

interface LoginFormikValues {
  email: string;
  password: string;
}

export const Login = ({
  values,
  errors,
  handleSubmit,
  handleChange,
  touched,
}: FormikProps<LoginFormikValues>): JSX.Element => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <p>Let's log in now</p>
      <Form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='Enter your email'
          id='email'
          value={values.email}
          name='email'
          className='border border-black p-1.5 rounded-md placeholder:text-black'
          onChange={handleChange}
        />
        {touched.email && errors.email ? (
          <p className='text-red-600'>{errors.email}</p>
        ) : (
          ''
        )}

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='Enter your password'
          id='password'
          value={values.password}
          name='password'
          className='border border-black p-1.5 rounded-md placeholder:text-black'
          onChange={handleChange}
        />
        {touched.email && errors.email ? (
          <p className='text-red-600'>{errors.email}</p>
        ) : (
          ''
        )}

        <button
          type='submit'
          className='bg-orange-400 text-white py-2 rounded-md'
        >
          Login
        </button>
      </Form>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),
  handleSubmit: (values: LoginFormikValues, { setSubmitting, resetForm }) => {
    const sessionData: string | null = sessionStorage.getItem('userData');

    if (sessionData !== null) {
      const userData: RegisterFormikValues[] = JSON.parse(sessionData);

      const userEmails: string[] = userData.map(
        (item: RegisterFormikValues) => item.email
      );
      const userPasswords: string[] = userData.map(
        (item: RegisterFormikValues) => item.password
      );

      if (
        userEmails.includes(values.email) &&
        userPasswords.includes(values.password)
      ) {
        alert(`You are successfully logged in ${values.email}`);
        setSubmitting(false); //indicating that the form execution is now complete
      } else {
        alert('Please check your credentials');
      }
    }
    resetForm();
  },
  displayName: 'Login',
})(Login);
