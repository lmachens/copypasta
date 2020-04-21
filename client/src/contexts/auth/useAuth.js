import { useContext } from 'react';
import AuthContext from './AuthContext';

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
