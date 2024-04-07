import {createContext} from "react";

export const AuthContext = createContext(null);

const AuthProvider = () => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>
      <h2>context here</h2>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
