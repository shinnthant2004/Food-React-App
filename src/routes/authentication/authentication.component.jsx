import { Fragment } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
const Authentication = () => {
  return (
    <Fragment>
      <div>
        <h2>Auth</h2>
        <SignUp />
        <SignIn />
      </div>
    </Fragment>
  );
};
export default Authentication;
