import React from "react";
import FormSubContainer from "../../components/LoginAndSignupComponents/FormSubContainer";
import Form from "../../components/LoginAndSignupComponents/Form";
import FormInput from "../../components/LoginAndSignupComponents/FormInput";
import PasswordInput from "../../components/LoginAndSignupComponents/PasswordInput";
import FormFooter from "../../components/LoginAndSignupComponents/FormFooter";

export default function LoginPage() {
  return (
    <div className="formpage">
      <FormSubContainer />
      <Form
        title="Login"
        formText="Welcome back! Please log in to access your account.">
        <FormInput label="Emial" type={"email"} />
        <PasswordInput />
        <FormFooter
          type="Login"
          goto="Sign Up"
          gotoRoute="sign-up"
          checkText="Remember Me"
          gotoText="Don’t have an account?"
        />
      </Form>
    </div>
  );
}
