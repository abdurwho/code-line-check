import { useState } from "react";
import styles from "./Settings.module.css";

export const Settings = (props) => {
  const [updateUser, setUpdateUser] = useState({});

  const handleNameChange = (event) => {
    setUpdateUser({...updateUser, name: event.target.value});
  };

  const handleUsernameChange = (event) => {
    setUpdateUser({...updateUser, username: event.target.value});
  };

  const handlePasswordChange = (event) => {
    setUpdateUser({...updateUser, password: event.target.value});
  };

  const handleBioChange = (event) => {
    setUpdateUser({...updateUser, bio: event.target.value});
  };

  const handleSubmit = () => {
    props.setUser(updateUser);
    alert("Your profile has been updated.");
  };

  return (
    <div style={{ paddingTop: 100 }}>
      <h1>Edit Profile:</h1>
      <label>Change name:</label>
      <input type="text" onChange={handleNameChange} />
      <br />
      <label>Change username:</label>
      <input type="text" onChange={handleUsernameChange} />
      <br />
      <label>Change password:</label>
      <input type="password" onChange={handlePasswordChange} />
      <br />
      <label>Change bio:</label>
      <textarea onChange={handleBioChange}></textarea>
      <br />
      <button onClick={handleSubmit}>Save Changes</button>
    </div>
  );
};




