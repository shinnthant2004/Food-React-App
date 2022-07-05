import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { SignUpContainer } from "./sign-up.styles";
import {
  SignUpWithGoogle,
  SignUpWithEmailAndPassword,
  createUserDocument,
  storage,
} from "../../utils/firebase/firebase.utils";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { TitleContainer, AuthChangeContainer } from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import { Title } from "../directory/directory.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import GoogleButton from "../google-button/google-button.component";
import Divider from "../divider/divider.component";
const form = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(form);
  const { displayName, email, password, confirmPassword } = formField;
  const [imageUpload, setImageUpload] = useState(null);
  const { setCurrentUserName, setCurrentUserProfile } = useContext(UserContext);
  const resetFormField = () => {
    setFormField(form);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
    }

    if (imageUpload === null) return;

    try {
      const { user } = await SignUpWithEmailAndPassword(email, password);

      const storagePath = "images/" + imageUpload.name;
      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, imageUpload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await createUserDocument(user, {
              displayName,
              imageUrl: downloadUrl,
            });
            setCurrentUserName(displayName);
            setCurrentUserProfile(downloadUrl);
            setImageUpload(null);
          });
        }
      );
      resetFormField();
    } catch (error) {
      console.log(error);
    }
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
    <SignUpContainer>
      <TitleContainer>
        <Title>Create New Account</Title>
        <AuthChangeContainer>
          <Link to="/">Sign In</Link>
          <span>instead?</span>
        </AuthChangeContainer>
      </TitleContainer>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Username"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
        />
        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Profile"
          type="file"
          name="profile"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
        />
        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
          Create Free Account
        </Button>
      </form>
      <Divider />
      <GoogleButton onClick={SignUpGoogle}>Sign up with google</GoogleButton>
    </SignUpContainer>
  );
};
export default SignUp;
