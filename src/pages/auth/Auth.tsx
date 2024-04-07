import { useState } from 'react';
import Login from './login/Login';
import SignUp from './signUp/SignUp';

export default function Auth() {
  const [onLogin, setonLogin] = useState<boolean>(true);
  const [onSignUp, setonSignUp] = useState<boolean>(false);

  const showLogin = () => {
    setonSignUp(false);
    setonLogin(true);
  };
  const showSignUp = () => {
    setonLogin(false);
    setonSignUp(true);
  };
  return (
    <div
      className={`w-full px-2 ${onLogin ? 'lg:w-1/2' : 'lg:w-2/3'} mx-auto my-5 flex flex-col gap-3 transition-all duration-300 ease-in-out`}
    >
      {/* <SnackbarComponent /> */}
      <h1 className="text-center text-2xl text-blue-600 font-bold tracking-wider">
        Login / SignUp
      </h1>

      <div className="flex gap-3  border-b-2 font-medium">
        <span
          className={`${onLogin ? 'border-b-[3px]' : 'border-b-0'} border-blue-500 p-2 cursor-pointer `}
          onClick={showLogin}
        >
          Login
        </span>
        <span
          className={`${onSignUp ? 'border-b-[3px]' : 'border-b-0'} border-blue-500 p-2 cursor-pointer`}
          onClick={showSignUp}
        >
          Sign up
        </span>
      </div>

      {onLogin && <Login />}
      {onSignUp && <SignUp onLogin={showLogin} />}
    </div>
  );
}
