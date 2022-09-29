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
          navigate('/allgames')
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
          navigate('/allgames')
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
      <div class="container mx-auto p-4 bg-white">
        <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
          <h1 class="text-lg font-bold" >Login</h1>
          <form class="flex flex-col mt-4" onSubmit={handleLoginSubmit}>
            <label htmlFor="email">email:</label>
            <input
                class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                id="email-input"
                type="text"
                name="email"
                value={loginFormData.email}
                onChange={handleLoginChange}
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <input
                class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                id="password-input"
                type="password"
                name="password"
                value={loginFormData.password}
                onChange={handleLoginChange}
            />
            <button class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none" type="submit">
              Submit
            </button>
          </form>
          <p class="mt-3 text-lg text-center ..." >or</p>
          <button class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none" onClick={handleClick} >Sign up</button>
        </div>
      </div>
    )
  }
  return (
    <div class="container mx-auto p-4 bg-white" >
      <div class="w-full md:w-1/2 lg:w-1/3 mx-auto my-12" >
        <h1 class="text-lg font-bold" >Register</h1>
        <form onSubmit={handleSubmit} class="flex flex-col mt-4">
          <label htmlFor="first_name">First Name:</label>
          <input
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              id="first_name-signup-input"
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
          />
          <br/>
          <label htmlFor="last_name">Last Name:</label>
          <input
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              id="last_name-signup-input"
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
          />
          <br/>
          <label htmlFor="email">Email:</label>
          <input
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              id="email-signup-input"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
          />
          <br/>
          <label htmlFor="password">Password:</label>
          <input
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              id="password-signup-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
          />
          <button class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none" type="submit">
            Submit
          </button>
        </form>
        <p class="mt-3 text-lg text-center ..." >or</p>
        <button class="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none" onClick={handleClick} >Log in</button>
       
      </div>
    </div>
  );
};

export default Auth;