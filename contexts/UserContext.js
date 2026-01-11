import React, { createContext, useState, useEffect, useContext } from 'react';
import { storage } from '@/utils/storage';
import { AVATARS } from '@/utils/constants';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Élève',
    avatar: AVATARS[0],
    class: null,
    school: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const savedUser = await storage.getUserProfile();
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  };

  const updateUser = async (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    await storage.saveUserProfile(updatedUser);
  };

  const resetUser = async () => {
    const defaultUser = {
      name: 'Élève',
      avatar: AVATARS[0],
      class: null,
      school: '',
    };
    setUser(defaultUser);
    await storage.saveUserProfile(defaultUser);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        resetUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
