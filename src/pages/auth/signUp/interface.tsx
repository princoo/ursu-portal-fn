export interface form1_ValuesType {
  firstname: string;
  lastname: string;
  email: string;
  telephoneN: string;
  nationality: string;
  IDno: string;
  guardian_name: string;
  guardian_tel: string;
  gender: string;
  homeAdress: {
    district: string;
    sector: string;
    cell: string;
    village: string;
  };
}
export interface form2_ValuesType {
  regN: string;
  school: string;
  department: string;
  level: number;
  sponsorship: string;
}
export interface AccountValuesType {
  password: string;
  confirmPassword: string;
}
export interface Accomodation {
  family?: Address;
  offCampus?: Address;
  campusHostel?: Hostel;
}

export interface Address {
  district: string;
  sector: string;
  cell: string;
  village: string;
}
export interface Hostel {
  hostel: string;
  roomNumber: string;
}
export interface form3_ValuesType {
  // accomodation: Campus;
  selectedAccomodation: string;
  district: string;
  sector: string;
  cell: string;
  village: string;
  hostel: string;
  roomNumber: string;
}
export interface RegisteredUser extends form1_ValuesType, form2_ValuesType {}

export interface PageStep {
  onFirstPage: boolean;
  onSecondPage: boolean;
  onThirdPage: boolean;
  onFourthPage: boolean;
}

export interface SignUpForm extends form1_ValuesType, form2_ValuesType {
  accomodation: Accomodation;
  password: string;
}

export interface SignUpInitials {
  loading: boolean;
  value: string | null;
  error: string | null;
}
