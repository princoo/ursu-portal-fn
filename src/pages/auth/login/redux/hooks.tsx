import { useAppDispatch } from '../../../../redux/hooks';
import { ValuesType } from '../interface';
import { logInUser } from './logInSlice';

export const useLogIn = () => {
  const dispatch = useAppDispatch();
  const handleLogIn = async (values: ValuesType) => {
    dispatch(logInUser(values));
  };
  return { handleLogIn };
};
