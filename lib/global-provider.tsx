import React, { createContext, useContext, ReactNode } from "react";
import { users } from "../constants/staticData";

interface GlobalContextType {
  isLogged: boolean;
  user: User | null;
  loading: boolean;
  refetch: () => void;
}

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {
  const user = users[0];
  const loading = false;
  const isLogged = true;

  const refetch = () => { };

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user,
        loading,
        refetch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within a GlobalProvider");

  return context;
};

export default GlobalProvider;
