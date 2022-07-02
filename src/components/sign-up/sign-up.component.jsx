import { useState } from "react";
import {
  SignUpWithGoogle,
  SignUpWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const form = {
  displayName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(form);
  const { displayName, email, password } = formField;

  const resetFormField = () => {
    setFormField(form);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("signup submit");
    await SignUpWithEmailAndPassword(email, password);
    resetFormField();
  };

  const SignUpGoogle = async () => {
    const user = await SignUpWithGoogle();
    console.log(user);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={SignUpGoogle}>Sign up with google</button>
    </div>
  );
};
export default SignUp;
