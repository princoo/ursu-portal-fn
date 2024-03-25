// import React, { ReactNode } from 'react';
// import { Route, Redirect } from 'react-router-dom';

// interface ProtectComponentProps {
//   children: ReactNode;
//   replace?: ReactNode;
// }
// // Route for the login component
// export const LoginRoute: React.FC<ProtectComponentProps> = ({ replace, children }) => (

// );

// // Route for the signup component
// const SignupRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !isLoggedIn ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/home" /> // Redirect to home if logged in
//       )
//     }
//   />
// );

// export default LoginRoute;
