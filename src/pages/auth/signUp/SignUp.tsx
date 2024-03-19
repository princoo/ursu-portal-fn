import { ChangeEvent } from 'react';
import { InputWithLabel } from '../../../components/Input';
import { useFormik } from 'formik';
import { ValuesType } from './interface';
import { validationSchema } from './schema/SignUpSchema';
import ErrorDiv from '../../../components/ErrorDiv';
import { Button } from '../../../components/Button';

export default function SignUp() {
  const handleSubmit = (values: ValuesType) => {
    return values;
  };
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, true, false);
    formik.handleChange(event);
  };
  const formik = useFormik({
    initialValues: {
      regNo: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      telephoneN: '',
      nationality: '',
      guardian_tel: '',
      residence: '',
      school: '',
      department: '',
      accomodation: '',
      sponsorship: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values: ValuesType) => {
      handleSubmit(values);
    },
  });
  return (
    <div>
      <form action="" className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2 flex-grow">
          <InputWithLabel
            label="First Name"
            type="firstName"
            name="firstName"
            id="firstName"
            placeholder="Enter first name"
            value={formik.values.firstName}
            onChange={handleFieldChange}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <ErrorDiv error={formik.errors.firstName} />
          )}
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <InputWithLabel
            label="Last Name"
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            value={formik.values.lastName}
            onChange={handleFieldChange}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <ErrorDiv error={formik.errors.lastName} />
          )}
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <InputWithLabel
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={formik.values.email}
            onChange={handleFieldChange}
          />
          {formik.touched.email && formik.errors.email && <ErrorDiv error={formik.errors.email} />}
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <InputWithLabel
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={handleFieldChange}
          />
          {formik.touched.password && formik.errors.password && (
            <ErrorDiv error={formik.errors.password} />
          )}
        </div>
        <div className="flex flex-col gap-2 flex-grow mb-5">
          <InputWithLabel
            label="Confirm password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Enter confirm password"
            value={formik.values.confirmPassword}
            onChange={handleFieldChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <ErrorDiv error={formik.errors.confirmPassword} />
          )}
        </div>
        <Button type="submit" loading_state={false} text="Sign In" color="primary" />
      </form>
    </div>
  );
}
