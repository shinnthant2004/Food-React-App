import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { Image } from "../../components/directory-item/directory-item.styles";
import { AuthContainer } from "./authentication.styles";
const Authentication = () => {
  return (
    <AuthContainer>
      <Image imageUrl="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?t=st=1656943086~exp=1656943686~hmac=80a920336d2cbf6299852030e7a058dbf9f1ba2e8265a24da1b6b4406cbb06a0&w=826" />
      <SignUp />
    </AuthContainer>
  );
};
export default Authentication;
