import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../FirebaseConfig";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      setIsLoading(true);
      if (u) {
        setUser(u);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: passwords don't match!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    auth
      .signOut()
      .then(() => setUser(null))
      .catch((e) => setError(e.message));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
