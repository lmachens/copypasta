import React from 'react';
import useAuth from '../contexts/auth/useAuth';

function UserInfo() {
  const { user, login } = useAuth();
  return (
    <div>
      {!user && <button onClick={() => login('Peter Meier')}>Login</button>}
      {user && user.name}
    </div>
  );
}

export default UserInfo;
