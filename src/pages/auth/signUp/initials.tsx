import { SignUpForm } from './interface';

export const initialValues: SignUpForm = {
  firstname: '',
  lastname: '',
  email: '',
  telephoneN: '',
  nationality: '',
  IDno: '',
  guardian_name: '',
  guardian_tel: '',
  homeAdress: {
    district: '',
    sector: '',
    cell: '',
    village: '',
  },
  gender: '',
  regN: '',
  school: '',
  department: '',
  level: 1,
  sponsorship: '',
  accomodation: {
    family: { district: '', sector: '', cell: '', village: '' },
    offCampus: { district: '', sector: '', cell: '', village: '' },
    campusHostel: { hostel: '', roomNumber: '' },
  },
  password: '',
};
