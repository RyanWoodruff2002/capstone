import React, { useState } from "react";

const Auth = ({ rerender, navigate, setCurrentUser }) => {

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          navigate('/allanimals')
          rerender()
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };



  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          navigate('/allanimals')
          rerender()
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

  function handleClick() {
    setToggle(toggle => !toggle)
  }

  const [toggle, setToggle] = useState(true)




  if (toggle === false){
    return (
      <div>
      <h1>Log in</h1>
      <form onSubmit={handleLoginSubmit}>
      <label htmlFor="email">email:</label>
      <input
          id="email-input"
          type="text"
          name="email"
          value={loginFormData.email}
          onChange={handleLoginChange}
      />
      <label htmlFor="password">Password:</label>
      <input
          id="password-input"
          type="password"
          name="password"
          value={loginFormData.password}
          onChange={handleLoginChange}
      />
      <button type="submit">Submit</button>
      </form>
      <p>or</p>
      <button onClick={handleClick} >Sign up</button>
  </div>
    )
  }
  return (
    <div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name:</label>
        <input
            id="first_name-signup-input"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
        />
        <br/>
        <label htmlFor="last_name">First Name:</label>
        <input
            id="last_name-signup-input"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
        />
        <br/>
        <label htmlFor="email">Email:</label>
        <input
            id="email-signup-input"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input
            id="password-signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        <button type="submit">Submit</button>
        </form>
        <p>or</p>
        <button onClick={handleClick} >Log in</button>
       
      
    </div>
  );
};

export default Auth;