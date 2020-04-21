import React from 'react';
import useAuth from '../contexts/auth/useAuth';

function LogoutButton() {
  const { user, logout } = useAuth;
  return (
    <button onClick={logout} disabled={!user}>
      Logout
    </button>
  );
}

export default LogoutButton;
