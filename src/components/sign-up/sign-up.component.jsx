import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import {
  SignUpWithGoogle,
  SignUpWithEmailAndPassword,
  createUserDocument,
  storage,
} from "../../utils/firebase/firebase.utils";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const form = {
  displayName: "",
  profile: "",
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
          type="file"
          name="profile"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
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
