import { useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

import { SignOutButton } from "./auth/SignOutButton";

const Home = ({ user, setUser }) => {
  const [fileUpload, setFileUpload] = useState(null);

  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Welcome to the home page, {user?.userName}</h1>

      <div>
        <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
        <button onClick={uploadFile}>Upload File</button>
      </div>

      <SignOutButton setUser={setUser} />
    </div>
  );
};

export default Home;
