import React from 'react';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  function login(name) {
    // call API
    setUser({
      name,
    });
  }

  function logout() {
    setUser(null);
  }

  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
