import * as Yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{6,}$/;

export const validationSchema = Yup.object().shape({
  regN: Yup.string()
    .matches(/^[0-9]+$/, 'Invalid reg number')
    .min(9, 'Reg number must be at least 9 digits')
    .max(9, 'Reg number must not exceed 9 digits')
    .required('Reg number is required'),
  password: Yup.string()
    .matches(
      passwordRegex,
      'Password must contain 6 characters containing uppercase letter(s), lowercase letter(s), a number and special character'
    )
    .required('Password is required'),
});
