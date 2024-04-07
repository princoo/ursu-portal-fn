import { useFormik } from 'formik';
import { ChangeEvent } from 'react';
import { AccountValuesType } from '../interface';
import { accountSchema } from '../schema/SignUpSchema';
import { InputWithLabel } from '../../../../components/Input';
import ErrorDiv from '../../../../components/ErrorDiv';
import { Button } from '../../../../components/Button';

export default function AccountForm(props: {
  onAccountSubmit: (values: AccountValuesType) => void;
  handleNext: () => void;
  loadingState: boolean;
}) {
  const { onAccountSubmit, handleNext, loadingState } = props;

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, true, false);
    formik.handleChange(event);
  };

  const handleOnNext = async () => {
    formik.handleSubmit();
    await formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0 && formik.dirty) {
        onAccountSubmit(formik.values);
        handleNext();
      }
    });
  };
  // const handleSubmit
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: accountSchema,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: (values: AccountValuesType) => {},
  });
  return (
    <div>
      {/* passwords */}
      <div className=" flex flex-col md:gap-3 mb-5">
        <div className="flex flex-col gap-2">
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
        <div className="flex flex-col gap-2">
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
      </div>
      {/* <button
        type="button"
        className="bg-blue-500 py-2 px-20 rounded-xl text-white font-medium flex items-center gap-2 mx-auto mt-5"
        onClick={handleOnNext}
      >
        Next
        <GrLinkNext />
      </button> */}
      <>
        <Button
          onClick={handleOnNext}
          type="submit"
          loading_state={loadingState}
          text="Sign In"
          color="primary"
        />
      </>
    </div>
  );
}
