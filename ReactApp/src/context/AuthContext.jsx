import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // null = ikke innlogget, ellers brukernavnet
  const [bruker, setBruker] = useState(null);

  function loggInn(navn) {
    setBruker(navn);
  }

  function loggUt() {
    setBruker(null);
  }

  return (
    <AuthContext.Provider value={{ bruker, loggInn, loggUt }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
