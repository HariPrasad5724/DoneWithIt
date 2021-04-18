import React, { useState } from "react";
import LoginNavigation from "./app/navigation/LoginNavigation";
import AuthContext from "./app/auth/context";

export default function App(props) {
  const [user, setUser] = useState();
  const [authToken, setauthToken] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser, authToken, setauthToken }}>
      <LoginNavigation />
    </AuthContext.Provider>
  );
}
