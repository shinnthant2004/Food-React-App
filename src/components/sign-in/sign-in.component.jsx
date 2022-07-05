import { useState } from "react";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
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
    <div>
      <h2>Sign in</h2>
      <p onClick={AuthHandler}>SignUp?</p>
      <form onSubmit={onSubmitHandler}>
        <input
          type="email"
          value={email}
          name="email"
          onChange={onChangeHandler}
        />
        <input
          type="password"
          value={password}
          name="password"
          onChange={onChangeHandler}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
export default SignIn;
