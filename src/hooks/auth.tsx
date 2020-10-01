import React, { createContext, useCallback, useState, useContext } from "react";

interface IAuthState {
  user: { name: string; email: string; photo?: string };
}

interface IAuthCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: { name: string; email: string; photo?: string };
  isSideMenuOpen: boolean;
  signIn(authCredentials: IAuthCredentials): void;
  signOut(): void;
  toggleSideMenu(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  //const [data, setData] = useState<IAuthState>({} as IAuthState);
  const [data, setData] = useState<IAuthState>({
    user: { name: "Carlos Filipe", email: "carlos@teste.com" },
  });
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(true);

  const signOut = useCallback(() => {
    setData({} as IAuthState);
  }, []);

  const signIn = useCallback(({ email, password }) => {
    setData({ user: { name: "Carlos Filipe", email: "carlos@teste.com" } });
  }, []);

  const toggleSideMenu = useCallback(() => {
    setIsSideMenuOpen((prev) => !prev);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        isSideMenuOpen,
        signIn,
        signOut,
        toggleSideMenu,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
