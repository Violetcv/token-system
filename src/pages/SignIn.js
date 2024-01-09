import React from "react";
import { useNavigate } from 'react-router-dom';
// import { useMoralis } from "react-moralis";
import "./signin.css";

const SignIn = () => {
  // const { authenticate, isAuthenticated } = useMoralis();
  const navigate = useNavigate();

  // const handleSignInWithMoralis = async () => {
  //   try {
  //     await authenticate({ signingMessage: "Sign in with Moralis" });
  //     if(isAuthenticated){
  //       navigate('/');
  //     }
  //   } catch (authError) {
  //     console.error("Moralis Authentication error:", authError);
  //   }
  // };

  return (
    <div>
      {/* build a sign in ui for web3 authorized registration */}

      <div class="container right-panel-active">
        {/* <!-- Sign Up --> */}
        <div class="container__form container--signup">
          <form action="#" class="form" id="form1">
            <h2 class="form__title">Sign Up with Email</h2>
            {/* <input type="text" placeholder="User" class="input" /> */}
            <input type="email" placeholder="Email" class="input" />
            <input type="password" placeholder="Password" class="input" />
            <button class="btn">Log in</button>
          </form>
        </div>

        {/* <!-- Sign In --> */}
        <div class="container__form container--signin">
          <form action="#" class="form" id="form2">
            <h2 class="form__title">Sign In</h2>
            <input type="email" placeholder="Email" class="input" />
            <input type="password" placeholder="Password" class="input" />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" class="link">
              Forgot your password?
            </a>
            <button type="button" class="btn" onClick={navigate('./SignInwMoralis.js')}>
              Sign In With Moralis
            </button>
          </form>
        </div>

        {/* <!-- Overlay --> */}
        <div class="container__overlay">
          <div class="overlay">
            <div class="overlay__panel overlay--left">
              <button class="btn" id="signIn">
                Sign In With Moralis
              </button>
            </div>
            <div class="overlay__panel overlay--right">
              <button class="btn" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
