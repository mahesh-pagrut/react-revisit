import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);

  // Wrap setUser to sync with localStorage
  const setUser = (userData) => {
    if (userData) {
      localStorage.setItem("profile-user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("profile-user");
    }
    setUserState(userData);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("profile-user");
    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
