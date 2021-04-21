import React, { useEffect, useState } from "react";
import LoginNavigation from "./app/navigation/LoginNavigation";
import AuthContext from "./app/auth/context";
import authStorage from "./app/services/authStorage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

export default function App(props) {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  // if (!isReady)
  //   return (
  //     <AppLoading  startAsync={restoreToken} onFinish={() => setIsReady(true)} />
  //   );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LoginNavigation />
    </AuthContext.Provider>
  );
}
