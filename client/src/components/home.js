import React from "react";
import UserService from "../services/UserService";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to example page!</h1>
      {UserService.isLoggedIn() ? (
        <div>
          <p>Dont forget to logout</p>
          <div>
            <button onClick={() => UserService.doLogout()}>Logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => UserService.doLogin()}>Login</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
