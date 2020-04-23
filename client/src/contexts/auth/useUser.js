import useAuth from './useAuth';

function useUser() {
  const { user } = useAuth();
  return user;
}

export default useUser;
