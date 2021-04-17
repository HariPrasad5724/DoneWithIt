import React, { useState } from "react";
import LoginNavigation from "./app/navigation/LoginNavigation";
import AuthContext from "./app/auth/context";

export default function App(props) {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LoginNavigation />
    </AuthContext.Provider>
  );
}
