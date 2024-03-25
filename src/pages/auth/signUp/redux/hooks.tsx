import { useAppDispatch } from '../../../../redux/hooks';
import { SignUpForm } from '../interface';
import { signUpUser } from './signUpSlice';

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const handleSignUp = async (values: SignUpForm) => {
    dispatch(signUpUser(values));
  };
  return { handleSignUp };
};
