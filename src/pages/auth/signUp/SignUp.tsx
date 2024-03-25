import { ChangeEvent, useEffect, useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { GrLinkNext } from 'react-icons/gr';
import { InputWithLabel } from '../../../components/Input';
import { useFormik } from 'formik';
import {
  Accomodation,
  AccountValuesType,
  PageStep,
  SignUpForm,
  form1_ValuesType,
  form2_ValuesType,
} from './interface';
import { validationSchema } from './schema/SignUpSchema';
import ErrorDiv from '../../../components/ErrorDiv';
import Stepper from '../../../components/Stepper';
import { StepperData } from '../../../components/Stepper';
import AccademicForm from './components/AccademicForm';
import AccomodationForm from './components/AccomodationForm';
import { initialValues } from './initials';
import { useSignUp } from './redux/hooks';
import AccountForm from './components/AccountForm';
import { useAppSelector } from '../../../redux/hooks';
import { toast } from 'react-toastify';

export default function SignUp(props: { onLogin: () => void }) {
  const { handleSignUp } = useSignUp();
  const [onPage, setonPage] = useState<PageStep>({
    onFirstPage: true,
    onSecondPage: false,
    onThirdPage: false,
    onFourthPage: false,
  });
  const [onSentData, setonSentData] = useState<boolean>(false);
  const [formData, setformData] = useState<SignUpForm>(initialValues);
  const { loading, value } = useAppSelector((state) => state.signUp);

  const handleFormSubmit = async (values: SignUpForm) => {
    setonSentData(true);
    handleSignUp(values);
    // console.log('first')
  };

  useEffect(() => {
    if (onSentData && value) {
      toast.success('User created successfully', { autoClose: 2000 });
      props.onLogin();
    }
  }, [onSentData, props, value]);

  const handlePersonalSubmit = (values: form1_ValuesType) => {
    setformData((prev) => ({
      ...prev,
      ...values,
    }));
  };
  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, true, false);
    formik.handleChange(event);
  };
  const handleSiteChange = (event: ChangeEvent<HTMLSelectElement>) => {
    formik.setFieldTouched(event.target.name, true, false);
    formik.handleChange(event);
  };
  const handleAccademicSubmit = (values: form2_ValuesType) => {
    setformData((prev) => ({
      ...prev,
      ...values,
    }));
  };
  const handleAccountSubmit = (values: AccountValuesType) => {
    setformData((prev) => ({
      ...prev,
      password: values.password,
    }));
    handleFormSubmit(formData);
  };

  const handleAccomodationSubmit = (values: Accomodation) => {
    const newData = { ...formData };
    // const key = Object.keys(values)[0] as keyof SignUpForm;
    if (!values.offCampus) delete newData.accomodation.offCampus;
    if (!values.campusHostel) delete newData.accomodation.campusHostel;
    if (!values.family) delete newData.accomodation.family;
    newData.accomodation = values;
    setformData(newData);
  };

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema,
    onSubmit: () => {},
  });

  const [stepData, setstepData] = useState<StepperData[]>([
    {
      step: 'Personal info',
      checked: false,
    },
    {
      step: 'Academic info',
      checked: false,
    },
    {
      step: 'Accomodation info',
      checked: false,
    },
    {
      step: 'Account info',
      checked: false,
    },
  ]);
  const handleNext = async () => {
    formik.handleSubmit();
    await formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0 && formik.dirty) {
        handlePersonalSubmit(formik.values);
        if (onPage.onFirstPage) {
          // If currently on the first page, transition to the second page
          setonPage((prev) => ({
            ...prev,
            onFirstPage: false,
            onSecondPage: true,
          }));
          setstepData((prev) => [
            {
              ...prev[0], // Copy the first element from previous state
              checked: true, // Update the checked property
            },
            ...prev.slice(1), // Copy the remaining elements from previous state
          ]);
        } else if (onPage.onSecondPage) {
          // If currently on the second page, transition to the third page
          setonPage((prev) => ({
            ...prev,
            onSecondPage: false,
            onThirdPage: true,
          }));
          setstepData((prev) => [
            prev[0],
            {
              ...prev[1], // Copy the second element from previous state
              checked: true, // Update the checked property
            },
            ...prev.slice(2), // Copy the remaining elements from previous state
          ]);
          // Perform any additional actions needed for transitioning to the third page
        } else if (onPage.onThirdPage) {
          setonPage((prev) => ({
            ...prev,
            onThirdPage: false,
            onFourthPage: true,
          }));
          setstepData((prev) => [
            prev[0],
            prev[1],
            {
              ...prev[2], // Copy the second element from previous state
              checked: true, // Update the checked property
            },
            ...prev.slice(3), // Copy the remaining elements from previous state
          ]);
          // Perform any additional actions needed for transitioning to the third page
        }
      }
    });
  };
  const handleBack = () => {
    if (onPage.onFourthPage) {
      setonPage((prev) => ({
        ...prev,
        // onFirstPage: false,
        // onSecondPage: false,
        onThirdPage: true,
        onFourthPage: false,
      }));
      setstepData((prev) => [
        prev[0],
        prev[1],
        {
          ...prev[2],
          checked: false,
        },
        ...prev.slice(3),
      ]);
    } else if (onPage.onThirdPage) {
      setonPage((prev) => ({
        ...prev,
        // onFirstPage: false,
        onSecondPage: true,
        onThirdPage: false,
      }));
      setstepData((prev) => [
        prev[0],
        {
          ...prev[1],
          checked: false,
        },
        ...prev.slice(2),
      ]);
    } else {
      setonPage((prev) => ({
        ...prev,
        onFirstPage: true,
        onSecondPage: false,
        // onThirdPage: false,
      }));
      setstepData((prev) => [
        {
          ...prev[0],
          checked: false,
        },
        ...prev.slice(1),
      ]);
    }
  };

  return (
    <div>
      <Stepper stepData={stepData} />
      <form action="" className="mt-3 overflow-hidden" onSubmit={formik.handleSubmit}>
        <div
          className={`personalInfo ${onPage.onSecondPage ? 'translate-x-[-100%] opacity-0 h-0' : !onPage.onThirdPage && !onPage.onFourthPage ? 'translate-x-0 opacity-100 h-auto' : 'translate-x-[-100%] opacity-0 h-0'} transition-all duration-300 ease-in-out`}
        >
          {/* names */}
          <div className="names flex flex-col md:flex-row md:gap-3">
            <div className="flex flex-col gap-2 flex-grow">
              <InputWithLabel
                label="First Name"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name"
                value={formik.values.firstname}
                onChange={handleFieldChange}
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <ErrorDiv error={formik.errors.firstname} />
              )}
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <InputWithLabel
                label="Last Name"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter last name"
                value={formik.values.lastname}
                onChange={handleFieldChange}
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <ErrorDiv error={formik.errors.lastname} />
              )}
            </div>
          </div>
          {/* email/phone */}
          <div className="names flex flex-col md:flex-row md:gap-3">
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
              {formik.touched.email && formik.errors.email && (
                <ErrorDiv error={formik.errors.email} />
              )}
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <InputWithLabel
                label="Phone Number"
                type="text"
                name="telephoneN"
                id="telephoneN"
                placeholder="Enter phone number"
                value={formik.values.telephoneN}
                onChange={handleFieldChange}
              />
              {formik.touched.telephoneN && formik.errors.telephoneN && (
                <ErrorDiv error={formik.errors.telephoneN} />
              )}
            </div>
          </div>
          {/* id / address */}
          <div className="names flex flex-col md:flex-row md:gap-3">
            <div className="flex flex-col gap-2 w-1/2">
              <InputWithLabel
                label="Nationality"
                type="text"
                name="nationality"
                id="nationality"
                placeholder="Enter nationality"
                value={formik.values.nationality}
                onChange={handleFieldChange}
              />
              {formik.touched.nationality && formik.errors.nationality && (
                <ErrorDiv error={formik.errors.nationality} />
              )}
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <InputWithLabel
                label="National Id"
                type="text"
                name="IDno"
                id="IDno"
                placeholder="Enter national id"
                value={formik.values.IDno}
                onChange={handleFieldChange}
              />
              {formik.touched.IDno && formik.errors.IDno && <ErrorDiv error={formik.errors.IDno} />}
            </div>
          </div>
          {/* gender */}
          <div className="flex flex-col gap-2">
            <label className="mt-3 text-sm font-medium">Gender</label>
            <select
              className="p-3 rounded-xl border border-gray-300 focus:outline-none  focus:border-blue-500"
              value={formik.values.gender}
              onChange={handleSiteChange}
              id="gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <ErrorDiv error={formik.errors.gender} />
            )}
          </div>
          {/* parent */}
          <div className="names flex flex-col md:flex-row md:gap-3">
            <div className="flex flex-col gap-2 flex-grow">
              <InputWithLabel
                label="Parent Name / Guardian Name"
                type="text"
                name="guardian_name"
                id="guardian_name"
                placeholder="Enter name"
                value={formik.values.guardian_name}
                onChange={handleFieldChange}
              />
              {formik.touched.guardian_name && formik.errors.guardian_name && (
                <ErrorDiv error={formik.errors.guardian_name} />
              )}
            </div>
            <div className="flex flex-col gap-2 flex-grow ">
              <InputWithLabel
                label="Parent Phone / Guardian Phone"
                type="text"
                name="guardian_tel"
                id="guardian_tel"
                placeholder="Enter phone"
                value={formik.values.guardian_tel}
                onChange={handleFieldChange}
              />
              {formik.touched.guardian_tel && formik.errors.guardian_tel && (
                <ErrorDiv error={formik.errors.guardian_tel} />
              )}
            </div>
          </div>
          <div className="home">
            <div className="names flex flex-col md:flex-row md:gap-3">
              <div className="flex flex-col gap-2 flex-grow">
                <InputWithLabel
                  label="District"
                  type="text"
                  name="homeAdress.district"
                  id="district"
                  placeholder="Enter district"
                  value={formik.values.homeAdress.district}
                  onChange={handleFieldChange}
                />
                {formik.touched.homeAdress?.district && formik.errors.homeAdress?.district && (
                  <ErrorDiv error={formik.errors.homeAdress?.district} />
                )}
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <InputWithLabel
                  label="Sector"
                  type="text"
                  name="homeAdress.sector"
                  id="sector"
                  placeholder="Enter sector"
                  value={formik.values.homeAdress.sector}
                  onChange={handleFieldChange}
                />
                {formik.touched.homeAdress?.sector && formik.errors.homeAdress?.sector && (
                  <ErrorDiv error={formik.errors.homeAdress?.sector} />
                )}
              </div>
            </div>
            {/* school/ department */}
            <div className="names flex flex-col md:flex-row md:gap-3">
              <div className="flex flex-col gap-2 flex-grow">
                <InputWithLabel
                  label="Cell"
                  type="text"
                  name="homeAdress.cell"
                  id="cell"
                  placeholder="Enter cell"
                  value={formik.values.homeAdress.cell}
                  onChange={handleFieldChange}
                />
                {formik.touched.homeAdress?.cell && formik.errors.homeAdress?.cell && (
                  <ErrorDiv error={formik.errors.homeAdress?.cell} />
                )}
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <InputWithLabel
                  label="Village"
                  type="text"
                  name="homeAdress.village"
                  id="village"
                  placeholder="Enter village"
                  value={formik.values.homeAdress.village}
                  onChange={handleFieldChange}
                />
                {formik.touched.homeAdress?.village && formik.errors.homeAdress?.village && (
                  <ErrorDiv error={formik.errors.homeAdress.village} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Accademic Page */}
        <div
          className={`personalInfo ${!onPage.onSecondPage && onPage.onFirstPage ? 'translate-x-full opacity-0 h-0' : (!onPage.onSecondPage && onPage.onThirdPage) || onPage.onFourthPage ? 'translate-x-[-100%] opacity-0 h-0' : 'translate-x-100 opacity-100 h-auto'} transition-all duration-300 ease-in-out`}
        >
          <button
            type="button"
            className="bg-gray-200 p-2 rounded-full font-medium"
            onClick={handleBack}
          >
            <IoArrowBackOutline />
          </button>
          <AccademicForm onAccSubmit={handleAccademicSubmit} handleNext={handleNext} />
        </div>

        {/* Accomodation Page */}
        <div
          className={` ${(!onPage.onThirdPage && onPage.onSecondPage) || onPage.onFirstPage ? 'translate-x-full opacity-0 h-0' : !onPage.onThirdPage && onPage.onFourthPage ? 'translate-x-[-100%] opacity-0 h-0' : 'translate-x-100 opacity-100 h-auto'} transition-all duration-300 ease-in-out`}
        >
          <button
            type="button"
            className="bg-gray-200 p-2 rounded-full font-medium"
            onClick={handleBack}
          >
            <IoArrowBackOutline />
          </button>
          <AccomodationForm
            handleNext={handleNext}
            accomodationSubmit={handleAccomodationSubmit}
            formData={formData}
          />
        </div>
        {/* Account Page */}
        <div
          className={` ${!onPage.onFourthPage ? 'translate-x-full opacity-0 h-0' : 'translate-x-100 opacity-100 h-auto'} transition-all duration-300 ease-in-out`}
        >
          <button
            type="button"
            className="bg-gray-200 p-2 rounded-full font-medium"
            onClick={handleBack}
          >
            <IoArrowBackOutline />
          </button>
          <AccountForm
            handleNext={handleNext}
            onAccountSubmit={handleAccountSubmit}
            loadingState={loading}
          />
        </div>

        {onPage.onFirstPage && (
          <button
            type="button"
            className="bg-blue-500 py-2 px-20 rounded-xl text-white font-medium flex items-center gap-2 mx-auto mt-5"
            onClick={handleNext}
          >
            Next
            <GrLinkNext />
          </button>
        )}
      </form>
    </div>
  );
}
