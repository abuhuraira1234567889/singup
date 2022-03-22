import React, { useState } from "react";

import axios from "axios";

import "./Form.css";

function Form() {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handletext = (e) => {
    setFullName(e.target.value);
  };
  const handluser = (e) => {
    setUserName(e.target.value);
  };
  const handlemail = (e) => {
    setEmail(e.target.value);
  };
  const handlpassword = (e) => {
    setPassword(e.target.value);
  };
  const handlesubmite = (e) => {
    e.preventDefault();
    axios
      .post("https://signbackend-new.vercel.app/singup", {
        fullName: fullname,
        username: username,
        email: email,
        password: password,
      })
      .then((res) => alert("Your Dats is Succefully posted on mongodb"))
      .catch((err) => alert("your data is not posted"));
    setFullName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handlesubmite(e);
        }}
      >
        <h3> Sign-up Form </h3>
        <label>Full Name:</label>
        <br />
        <input
          type="text"
          value={fullname}
          required
          onChange={(e) => {
            handletext(e);
          }}
        />
        <br />
        <label>UserName:</label>
        <br />
        <input
          type="text"
          value={username}
          required
          onChange={(e) => {
            handluser(e);
          }}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            handlemail(e);
          }}
          required
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            handlpassword(e);
          }}
          required
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
