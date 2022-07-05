import { useState } from "react";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  SignUpContainer,
  TitleContainer,
  AuthChangeContainer,
} from "../sign-up/sign-up.styles";
import { Title } from "../directory/directory.styles";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import GoogleButton from "../google-button/google-button.component";
import Divider from "../divider/divider.component";
const form = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFormField] = useState(form);
  const { email, password } = formField;
  const { setOpenSignIn } = useContext(UserContext);
  const resetFormField = () => {
    setFormField(form);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { user } = await signInUserWithEmailAndPassword(email, password);
    resetFormField();
    console.log(user);
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  const AuthHandler = () => {
    setOpenSignIn(false);
  };
  return (
    <SignUpContainer>
      <TitleContainer>
        <Title>Already Have An Account</Title>
        <AuthChangeContainer>
          <p onClick={AuthHandler}>Sign Up</p>
          <span>instead?</span>
        </AuthChangeContainer>
      </TitleContainer>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          onChange={onChangeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={onChangeHandler}
        />
        <Button type="submit">Sign In</Button>
      </form>
      <Divider />
      <GoogleButton>Sign In With Google</GoogleButton>
    </SignUpContainer>
  );
};
export default SignIn;
