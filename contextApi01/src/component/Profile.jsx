import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please Login</div>;
  return (
    <>
      <h2> hello {user.username}</h2>
      <h3>and your password is: {user.password}</h3>
    </>
  );
};

export default Profile;
