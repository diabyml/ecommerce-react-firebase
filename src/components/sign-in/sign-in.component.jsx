import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

import { connect } from "react-redux";
import {
  googleSigninStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

function SignIn({ googleSigninStart, emailSignInStart }) {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;

   emailSignInStart( {email,password} );

    setState({ email: "", password: "" });
  };
  return (
    <div className="sign-in">
      <h2> I already have an account </h2>
      <span> Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={state.email}
          id="email"
          required
          label="Email"
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          id="password"
          required
          label="Password"
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSigninStart}
            isGoogleSignIn={true}
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
