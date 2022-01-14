import { Avatar } from "@material-ui/core";
import React from "react";
import { useStateValue } from "./StateProvider";
import "./Profile.css"

function Profile() {
  const [{ user }, dispatch] = useStateValue();
//   console.log(user);

  return (
    <div className="profile__container">
      <Avatar className="profile__Avatar"  src={user.photoURL}   />
      {/* <Avatar className="profile__Avatar" alt="s"    /> */}
      <p>{user.displayName}</p>
      {/* <p>Sagar Nishad</p> */}
    </div>
  );
}

export default Profile;
