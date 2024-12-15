import { withFormik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';

export interface RegisterFormikValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched,
}: FormikProps<RegisterFormikValues>): JSX.Element => {
  return (
    <div className='flex flex-col gap-5 h-screen justify-center items-center'>
      <p className='text-4xl'>Register yourself</p>
      <Form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          placeholder='Enter your first name'
          id='firstName'
          className='border border-black p-1.5 rounded-md placeholder:text-black'
          name='firstName'
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName ? (
          <p className='text-red-600'> {errors.firstName} </p>
        ) : (
          ''
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          placeholder='Enter your last name'
          id='lastName'
          onChange={handleChange}
          value={values.lastName}
          className='border border-black p-1.5 rounded-md placeholder:text-black'
          name='lastName'
        />
        {touched.lastName && errors.lastName ? (
          <p className='text-red-600'> {errors.lastName} </p>
        ) : (
          ''
        )}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='Enter your email'
          id='email'
          onChange={handleChange}
          value={values.email}
          className='border border-black p-1.5 rounded-md placeholder:text-black'
          name='email'
        />
        {touched.email && errors.email ? (
          <p className='text-red-600'> {errors.email} </p>
        ) : (
          ''
        )}

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='Enter your password'
          id='password'
          onChange={handleChange}
          value={values.password}
          className='border border-black p-1.5 rounded-md placeholder:text-black'
          name='password'
        />
        {touched.password && errors.password ? (
          <p className='text-red-600'> {errors.password} </p>
        ) : (
          ''
        )}

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          placeholder='Confirm password'
          id='confirmPassword'
          onChange={handleChange}
          value={values.confirmPassword}
          className='border border-black p-1.5 rounded-md placeholder:text-black'
          name='confirmPassword'
        />
        {touched.confirmPassword && errors.confirmPassword ? (
          <p className='text-red-600'> {errors.confirmPassword} </p>
        ) : (
          ''
        )}

        <button
          type='submit'
          className='border border-white bg-blue-600 text-white rounded-md py-1.5'
        >
          Register
        </button>
      </Form>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm Password is required'),
  }),
  handleSubmit: (values: RegisterFormikValues, { setSubmitting }) => {
    if (!values) {
      console.log('values', values);
      setSubmitting(false); //it sets the submitting state to false, indicating that the form submission is complete
      sessionStorage.setItem('userData', JSON.stringify(values));
      alert('Congrats you are registered!');
    }
  },
  displayName: 'Register',
})(Register);
