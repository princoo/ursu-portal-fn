import { useFormik } from 'formik';
import { ChangeEvent } from 'react';
import { form2_ValuesType } from '../interface';
import { accademicSchema } from '../schema/SignUpSchema';
import { InputWithLabel } from '../../../../components/Input';
import ErrorDiv from '../../../../components/ErrorDiv';
import { GrLinkNext } from 'react-icons/gr';

export default function AccademicForm(props: {
  onAccSubmit: (values: form2_ValuesType) => void;
  handleNext: () => void;
}) {
  const { onAccSubmit, handleNext } = props;

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, true, false);
    formik.handleChange(event);
  };

  const handleSiteChange = (event: ChangeEvent<HTMLSelectElement>) => {
    formik.setFieldTouched(event.target.name, true, false);
    formik.handleChange(event);
  };
  const handleOnNext = async () => {
    formik.handleSubmit();
    await formik.validateForm().then((errors) => {
      // formik.setTouched;
      if (Object.keys(errors).length === 0 && formik.dirty) {
        onAccSubmit(formik.values);
        handleNext();
      }
    });
  };
  // const handleSubmit
  const formik = useFormik({
    initialValues: {
      regN: '',
      school: '',
      department: '',
      level: 1,
      sponsorship: '',
    },
    validationSchema: accademicSchema,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: (values: form2_ValuesType) => {},
  });
  return (
    <div>
      {/* <form action="" onSubmit={formik.handleSubmit}> */}
      {/* reg / level */}
      <div className="names flex flex-col md:flex-row md:gap-3">
        <div className="flex flex-col gap-2 flex-grow">
          <InputWithLabel
            label="Registration Number"
            type="text"
            name="regN"
            id="regN"
            placeholder="Enter reg number"
            value={formik.values.regN}
            onChange={handleFieldChange}
          />
          {formik.touched.regN && formik.errors.regN && <ErrorDiv error={formik.errors.regN} />}
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <InputWithLabel
            label="Year of study"
            type="number"
            name="level"
            id="level"
            placeholder="Enter year of study"
            value={formik.values.level.toString()}
            onChange={handleFieldChange}
          />
          {formik.touched.level && formik.errors.level && <ErrorDiv error={formik.errors.level} />}
        </div>
      </div>
      {/* school/ department */}
      <div className="names flex flex-col md:flex-row md:gap-3">
        <div className="flex flex-col gap-2 flex-grow">
          <InputWithLabel
            label="School"
            type="text"
            name="school"
            id="school"
            placeholder="Enter school"
            value={formik.values.school}
            onChange={handleFieldChange}
          />
          {formik.touched.school && formik.errors.school && (
            <ErrorDiv error={formik.errors.school} />
          )}
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <InputWithLabel
            label="Department"
            type="text"
            name="department"
            id="department"
            placeholder="Enter department"
            value={formik.values.department}
            onChange={handleFieldChange}
          />
          {formik.touched.department && formik.errors.department && (
            <ErrorDiv error={formik.errors.department} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 w">
        <label className="mt-3 text-sm font-medium">Sponsorship</label>
        <select
          className="p-3 rounded-xl border border-gray-300 focus:outline-none  focus:border-blue-500"
          value={formik.values.sponsorship}
          onChange={handleSiteChange}
          id="sponsorship"
        >
          <option value="HEC_loan">Government sponsored</option>
          <option value="private">Private sponsored</option>
        </select>
        {formik.touched.sponsorship && formik.errors.sponsorship && (
          <ErrorDiv error={formik.errors.sponsorship} />
        )}
      </div>
      <button
        type="button"
        className="bg-blue-500 py-2 px-20 rounded-xl text-white font-medium flex items-center gap-2 mx-auto mt-5"
        onClick={handleOnNext}
      >
        Next
        <GrLinkNext />
      </button>
      {/* </form> */}
    </div>
  );
}
