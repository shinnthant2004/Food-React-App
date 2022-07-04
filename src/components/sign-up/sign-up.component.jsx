import { useState } from "react";
import {
  SignUpWithGoogle,
  SignUpWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";

const form = {
  displayName: "",
  profile: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(form);
  const { displayName, profile, email, password, confirmPassword } = formField;

  const resetFormField = () => {
    setFormField(form);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { user } = await SignUpWithEmailAndPassword(email, password);
    await createUserDocument(user, { displayName });
    resetFormField();
  };

  const SignUpGoogle = async () => {
    const user = await SignUpWithGoogle();
    console.log(user);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e);
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
        <input type="file" name="profile" onChange={onChangeHandler} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={SignUpGoogle}>Sign up with google</button>
    </div>
  );
};
export default SignUp;
