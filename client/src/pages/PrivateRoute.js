import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

//grabbing children and rest of params(with ...rest)
const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext();

  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/' />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
