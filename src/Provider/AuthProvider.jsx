import React, { createContext, useEffect, useState } from "react";
import App from "../App";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const Authcontext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

//    creating obserber when reload user will remain
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe();
    }
  },[])
  const createNewUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const logout=()=>{
    return signOut(auth);
}

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logout,
    userLogin,
  };
//  
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
