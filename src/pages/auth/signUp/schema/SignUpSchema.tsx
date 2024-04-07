import * as Yup from 'yup';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{6,}$/;

export const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  telephoneN: Yup.string().required('Phone Number is required'),
  gender: Yup.string().required('Gender is required'),
  nationality: Yup.string().required('Nationality is required'),
  IDno: Yup.string()
    .matches(/^[0-9]+$/, 'Invalid id')
    .required('Id is required'),
  guardian_name: Yup.string().required('Parent name is required'),
  guardian_tel: Yup.string().required('Parent number is required'),
  homeAdress: Yup.object().shape({
    district: Yup.string().required('District is required'),
    sector: Yup.string().required('Sector is required'),
    cell: Yup.string().required('Cell is required'),
    village: Yup.string().required('Village is required'),
  }),
});

export const accademicSchema = Yup.object().shape({
  regN: Yup.string()
    .matches(/^[0-9]+$/, 'Invalid reg number')
    .length(9, 'Reg number must be exactly 9 digits')
    .required('Reg number is required'),
  level: Yup.number()
    .min(1, 'Invalid level')
    .max(5, 'Invalid level')
    .typeError('Level must be a number')
    .integer('Level must be an integer')
    .positive('Level must be positive')
    .required('Level is required'),

  school: Yup.string().required('School is required'),
  department: Yup.string().required('Department is required'),
  sponsorship: Yup.string().required('Sponsorship is required'),
});

export const accountSchema = Yup.object().shape({
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

export const accomodationSchema = Yup.object().shape({
  selectedAccomodation: Yup.string().required('Accomodation is required'),
  district: Yup.string().when('selectedAccomodation', ([selectedAccomodation], sch) =>
    selectedAccomodation !== 'campusHostel'
      ? sch.required('District is required')
      : sch.notRequired()
  ),
  sector: Yup.string().when('selectedAccomodation', ([selectedAccomodation], sch) =>
    selectedAccomodation !== 'campusHostel' ? sch.required('Sector is required') : sch.notRequired()
  ),
  cell: Yup.string().when('selectedAccomodation', ([selectedAccomodation], sch) =>
    selectedAccomodation !== 'campusHostel' ? sch.required('cell is required') : sch.notRequired()
  ),
  village: Yup.string().when('selectedAccomodation', ([selectedAccomodation], sch) =>
    selectedAccomodation !== 'campusHostel'
      ? sch.required('Village is required')
      : sch.notRequired()
  ),
  hostel: Yup.string().when('selectedAccomodation', ([selectedAccomodation], sch) =>
    selectedAccomodation === 'campusHostel' ? sch.required('Hostel is required') : sch.notRequired()
  ),
  roomNumber: Yup.number().when('selectedAccomodation', ([selectedAccomodation], sch) =>
    selectedAccomodation === 'campusHostel'
      ? sch.required('Room number is required')
      : sch.notRequired()
  ),
});
