import React, { useContext, useState } from "react";
import { UserContext } from "../context/user.context";
import { UserContextT } from "../types";
import { initialUser } from "../context/user.context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const { LoginUser } = useContext<UserContextT>(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    LoginUser(user);
    navigate("/user");
  };
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={(e: any) => setUser({ ...user, firstName: e.target.value})}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={(e: any) => setUser({ ...user, lastName: e.target.value})}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
