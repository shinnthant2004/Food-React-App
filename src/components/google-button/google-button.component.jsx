import { ReactComponent as GoogleIcon } from "../../assets/google.svg";
import {
  GoogleSignInButton,
  GoogleButtonContainer,
} from "./google-button.styles";
const GoogleButton = ({ children, ...otherProps }) => {
  return (
    <GoogleSignInButton {...otherProps}>
      <GoogleButtonContainer>
        <GoogleIcon />
        <span>{children}</span>
      </GoogleButtonContainer>
    </GoogleSignInButton>
  );
};
export default GoogleButton;
