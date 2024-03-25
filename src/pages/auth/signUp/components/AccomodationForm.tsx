import { useFormik } from 'formik';
import { ChangeEvent } from 'react';
import { Accomodation, SignUpForm, form3_ValuesType } from '../interface';
import { accomodationSchema } from '../schema/SignUpSchema';
import { InputWithLabel } from '../../../../components/Input';
import ErrorDiv from '../../../../components/ErrorDiv';
import { GrLinkNext } from 'react-icons/gr';

export default function AccomodationForm(props: {
  formData: SignUpForm;
  accomodationSubmit: (values: Accomodation) => void;
  handleNext: () => void;
}) {
  const { accomodationSubmit, handleNext } = props;

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
      let body: Accomodation;
      // formik.setTouched;
      if (Object.keys(errors).length === 0 && formik.dirty) {
        if (formik.values.selectedAccomodation === 'campusHostel') {
          body = {
            [formik.values.selectedAccomodation]: {
              hostel: formik.values.hostel,
              roomNumber: formik.values.roomNumber,
            },
          };
        } else {
          body = {
            [formik.values.selectedAccomodation]: {
              district: formik.values.district,
              sector: formik.values.sector,
              cell: formik.values.cell,
              village: formik.values.village,
            },
          };
        }

        accomodationSubmit(body);
        handleNext();
      }
    });
  };
  const formik = useFormik({
    initialValues: {
      selectedAccomodation: '',
      district: '',
      sector: '',
      cell: '',
      village: '',
      hostel: '',
      roomNumber: '',
    },
    validationSchema: accomodationSchema,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: (values: form3_ValuesType) => {},
  });
  const hostels = ['Girls Hostel', 'XM Hostel', 'Facebook Hostel', 'Dusaidi Hostel'];
  return (
    <div>
      {/* <form action=""> */}
      <div className="flex flex-col gap-2 w">
        <label className="mt-3 text-sm font-medium">Accomodation</label>
        <select
          className="p-3 rounded-xl border border-gray-300 focus:outline-none  focus:border-blue-500"
          value={formik.values.selectedAccomodation}
          onChange={handleSiteChange}
          id="selectedAccomodation"
          required
        >
          <option value="campusHostel">Campus hostel</option>
          <option value="offCampus">Off campus</option>
          <option value="family">Family</option>
        </select>
        {formik.touched.selectedAccomodation && formik.errors.selectedAccomodation && (
          <ErrorDiv error={formik.errors.selectedAccomodation} />
        )}
      </div>
      {/* reg / level */}
      {formik.values.selectedAccomodation != 'campusHostel' ? (
        <div className="home">
          <div className="names flex flex-col md:flex-row md:gap-3">
            <div className="flex flex-col gap-2 flex-grow">
              <InputWithLabel
                label="District"
                type="text"
                name="district"
                id="district"
                placeholder="Enter district"
                value={formik.values.district}
                onChange={handleFieldChange}
              />
              {formik.touched.district && formik.errors.district && (
                <ErrorDiv error={formik.errors.district} />
              )}
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <InputWithLabel
                label="Sector"
                type="text"
                name="sector"
                id="sector"
                placeholder="Enter sector"
                value={formik.values.sector}
                onChange={handleFieldChange}
              />
              {formik.touched.sector && formik.errors.sector && (
                <ErrorDiv error={formik.errors.sector} />
              )}
            </div>
          </div>
          {/* school/ department */}
          <div className="names flex flex-col md:flex-row md:gap-3">
            <div className="flex flex-col gap-2 flex-grow">
              <InputWithLabel
                label="Cell"
                type="text"
                name="cell"
                id="cell"
                placeholder="Enter cell"
                value={formik.values.cell}
                onChange={handleFieldChange}
              />
              {formik.touched.cell && formik.errors.cell && <ErrorDiv error={formik.errors.cell} />}
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <InputWithLabel
                label="Village"
                type="text"
                name="village"
                id="village"
                placeholder="Enter village"
                value={formik.values.village}
                onChange={handleFieldChange}
              />
              {formik.touched.village && formik.errors.village && (
                <ErrorDiv error={formik.errors.village} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="hostel">
          <div className="flex flex-col gap-2 w">
            <label className="mt-3 text-sm font-medium">Hostel</label>
            <select
              className="p-3 rounded-xl border border-gray-300 focus:outline-none  focus:border-blue-500"
              value={formik.values.hostel}
              onChange={handleSiteChange}
              id="hostel"
            >
              {hostels.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            {formik.touched.hostel && formik.errors.hostel && (
              <ErrorDiv error={formik.errors.hostel} />
            )}
          </div>
          <div className="flex flex-col gap-2 flex-grow">
            <InputWithLabel
              label="Room number"
              type="text"
              name="roomNumber"
              id="roomNumber"
              placeholder="Enter room number"
              value={formik.values.roomNumber}
              onChange={handleFieldChange}
            />
            {formik.touched.roomNumber && formik.errors.roomNumber && (
              <ErrorDiv error={formik.errors.roomNumber} />
            )}
          </div>
        </div>
      )}
      <button
        type="button"
        className=" bg-blue-500 py-2 px-20 rounded-xl text-white font-medium flex items-center gap-2 mx-auto mt-5"
        onClick={handleOnNext}
      >
        Next
        <GrLinkNext />
      </button>
      {/* </form> */}
    </div>
  );
}
