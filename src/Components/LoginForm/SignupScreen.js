import React, { useRef, useState } from "react";
import ri1 from "../Images/ri1.jpg";
import "./SignupScreen.css";
import firebase from "firebase";
import auth from "../../firebase";

function SignupScreen() {
  const emailref = useRef();
  const passwordref = useRef();
  const [signup, setsignup] = useState(true);
  const [loading, setloading] = useState(false);

  const changehandler = () => {
    return setsignup((previoustate) => !previoustate);
  };

  const signuphandler = (e) => {
    e.preventDefault();
    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    setloading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(enteredemail, enteredpassword)
      .then((userCredential) => {
        setloading(false);
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error.message);
        alert("Please Make sure you enter the correct credential");
        return setloading(false);
      });
    enteredemail("");
    enteredpassword("");
  };

  const signinhandler = (e) => {
    e.preventDefault();
    const enteredemail = emailref.current.value;
    const enteredpassword = passwordref.current.value;
    setloading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(enteredemail, enteredpassword)
      .then((userCredential) => {
        setloading(false);
        console.log(userCredential);
      })
      .catch((error) => {
        alert("Please Make sure you enter the correct credential");
        return setloading(false);
      });
  };

  return (
    <div className="outer-container">
    <div className="signupscreen">
      <img src={ri1} alt="ri" />
      <h2>Welcome to NewsHub</h2>
      <span>Lets {signup ? "signup" : "login"} to watch news</span>
      <form>
        <input type="text" placeholder="Email Address" ref={emailref} />
        <input type="password" placeholder="Password" ref={passwordref} />

        <div className="new">
          <span onClick={changehandler}>
            {!signup ? "Create Account" : "Log in"}
          </span>
          
        </div>

        {!loading && signup && <button onClick={signuphandler}>SIGN UP</button>}
        {!loading && !signup && <button onClick={signinhandler}>LOG IN</button>}
        {loading && <p>Loading News.....</p>}
      </form>
    </div>
      

      </div>
  );
}

export default SignupScreen;
