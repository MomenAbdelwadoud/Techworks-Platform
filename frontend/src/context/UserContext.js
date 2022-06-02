import React, { createContext, useState } from "react";

export const UserContext = createContext({
  signedIn: true,
  userType: "",
  setSignedIn: (val) => {},
  setUserType: (val) => {},
});

export default function ContextWrapper(props) {
  const [signedIn, setSignedIn] = useState(true);
  const [userType, setUserType] = useState("participant");

  const setSignedInFunc = (val) => {
    setSignedIn(val);
  };
  const setUserTypeFunc = (val) => {
    setUserType(val);
  };

  let context = {
    signedIn: signedIn,
    userType: userType,
    setSignedIn: setSignedInFunc,
    setUserType: setUserTypeFunc,
  };
  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
}
