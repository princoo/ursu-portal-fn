import { ChangeEvent, useEffect } from 'react';
import { InputWithLabel } from '../../../components/Input';
import { useFormik } from 'formik';
import { ValuesType } from './interface';
import { validationSchema } from './schema/LoginSchema';
import ErrorDiv from '../../../components/ErrorDiv';
import { Button } from '../../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { GoQuestion } from 'react-icons/go';
import { useLogIn } from './redux/hooks';
import { useAppSelector } from '../../../redux/hooks';

export default function Login() {
  const { loading, value } = useAppSelector((state) => state.logIn);
  const { handleLogIn } = useLogIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (value) {
      navigate('/', { replace: true });
    }
  }, [navigate, value]);

  const handleSubmit = (values: ValuesType) => {
    handleLogIn(values);
    return values;
  };
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, true, false);
    formik.handleChange(event);
  };
  const formik = useFormik({
    initialValues: {
      regN: '',
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
            name="regN"
            id="regN"
            placeholder="Enter reg number"
            value={formik.values.regN}
            onChange={handleFieldChange}
          />
          {formik.touched.regN && formik.errors.regN && <ErrorDiv error={formik.errors.regN} />}
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
        <Button type="submit" loading_state={loading} text="Sign In" color="primary" />
      </form>
    </div>
  );
}
