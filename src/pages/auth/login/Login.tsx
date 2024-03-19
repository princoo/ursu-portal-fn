import { ChangeEvent } from 'react';
import { InputWithLabel } from '../../../components/Input';
import { useFormik } from 'formik';
import { ValuesType } from './interface';
import { validationSchema } from './schema/LoginSchema';
import ErrorDiv from '../../../components/ErrorDiv';
import { Button } from '../../../components/Button';
import { Link } from 'react-router-dom';
import { GoQuestion } from 'react-icons/go';

export default function Login() {
  const handleSubmit = (values: ValuesType) => {
    // console.log(values);
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
            label="Reg Number"
            type="text"
            name="regNo"
            id="regNo"
            placeholder="Enter reg number"
            value={formik.values.regNo}
            onChange={handleFieldChange}
          />
          {formik.touched.regNo && formik.errors.regNo && <ErrorDiv error={formik.errors.regNo} />}
        </div>
        <div className="flex flex-col gap-2 flex-grow mb-4">
          <InputWithLabel
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={handleFieldChange}
          />
          <Link to={'#'} className="font-medium text-sm flex gap-1 items-center">
            Forget password{' '}
            <span>
              <GoQuestion />
            </span>
          </Link>
          {formik.touched.password && formik.errors.password && (
            <ErrorDiv error={formik.errors.password} />
          )}
        </div>
        <Button type="submit" loading_state={false} text="Sign In" color="primary" />
      </form>
    </div>
  );
}
