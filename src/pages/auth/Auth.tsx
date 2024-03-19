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
    <div className="bg-blue-10 w-full lg:w-1/3 mx-auto my-10 flex flex-col gap-3">
      <h1 className="text-center text-2xl font-bold">Login or sign up</h1>

      <div className="flex gap-3  border-b-2 font-medium">
        <span
          className={`${onLogin ? 'border-b-[3px]' : ''} border-black p-2 cursor-pointer`}
          onClick={showLogin}
        >
          Login
        </span>
        <span
          className={`${onSignUp ? 'border-b-[3px]' : ''} border-black p-2 cursor-pointer`}
          onClick={showSignUp}
        >
          Sign up
        </span>
      </div>

      {onLogin && <Login />}
      {onSignUp && <SignUp />}
    </div>
  );
}
