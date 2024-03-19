import * as Yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{6,}$/;

export const validationSchema = Yup.object().shape({
  regNo: Yup.number().required('Reg number is required'),
  firstName: Yup.number().required('First name is required'),
  lastName: Yup.number().required('Last name is required'),
  email: Yup.number().required('Email is required'),
  password: Yup.string()
    .matches(
      passwordRegex,
      'Password must contain 6 characters containing uppercase letter(s), lowercase letter(s), a number and special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});
