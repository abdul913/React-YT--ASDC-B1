import { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UserProver } from "./context/AddUserContext";
function App() {
  let [user, setUser] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const email = user.email;

        setUser({ uid: uid, email: email });
        console.log("uid from auth State Change", uid);
        console.log("email from auth State Change", email);
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
        navigate("/");
      }
    });
  }, []);
  return (
    <>
      <UserProver value={{ user }}>
        <Header />
        <Outlet />
      </UserProver>
    </>
  );
}

export default App;
