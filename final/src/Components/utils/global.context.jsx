  import { createContext, useMemo } from "react";

  export const initialState = { theme: "", data: [] };

  export const ContextGlobal = createContext(undefined);

  export const ContextProvider = ({ children }) => {
    const value = useMemo(() => {
      const theme = localStorage.getItem("theme");
      
      return {};
    }, []);

    return (
      <ContextGlobal.Provider value={value}>
        {children}
      </ContextGlobal.Provider>
    );
  };
