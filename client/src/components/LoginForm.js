import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";
import LogInNav from "./LogInNav"
import "../styles/home.css"
function LoginForm({ onLogin }) {


 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
     <div className="video-container">
    <iframe  src="https://www.youtube.com/embed/5i2HRp5C1yY? 
    &autoplay=1&mute=1&playlist=5i2HRp5C1yY&loop=1" >
       </iframe>
       </div>
    <form onSubmit={handleSubmit} id="form">
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        <h5>{errors}</h5>
      </FormField>
    </form>
   
   
       </>
   
  );
}

export default LoginForm;
