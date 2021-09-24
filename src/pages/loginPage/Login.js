import React, { useState } from "react";
import style from "./Login.module.css";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar.js";
import AddCart from "../../components/AddToCart/AddCart";

const Login = () => {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details do not match !");
    }
  };

  const Logout = () => {
    setUser({
      name: "",
      email: "",
    });
    setError("");
  };

  return (
    <div className={style.login}>
      {user.email !== "" ? (
        <div class="welcome">
          <Navbar />
          <AddCart />
          {/* <button onClick={Logout}>Logout</button> */}
        </div>
      ) : (
        <Form Login={Login} error={error} />
      )}
    </div>
  );
};

export default Login;
