import React, { useContext } from "react";
import { UserContext } from "../context/user.context";
import { UserContextT } from "../types";

const LoggedInUser = () => {
  const { user } = useContext<UserContextT>(UserContext);
  return (
    <div className="logged_in">
      <h1>
        Welcome {user.firstName} {user.lastName}
      </h1>
    </div>
  );
};

export default LoggedInUser;
