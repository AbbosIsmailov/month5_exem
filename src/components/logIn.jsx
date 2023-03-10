import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAccessToken, getAccessToken } from "../utilits/localeStorage";
function LogIn() {
  const navigate = useNavigate();

  function loginFunction() {
    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      setAccessToken();
      axios
        .post(`http://167.235.158.238:3001/login`, {
          email: loginEmail.value,
          password: loginPassword.value,
        })
        .then((response) => {
          setAccessToken(response.data.accessToken);
          console.log(response.data);
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("userEmail", response.data.user.email);
        });
      if (getAccessToken()) {
        navigate("/main");
      }
    });
  }

  return getAccessToken() ? (
    <section className="login-page">
      <div className="main-page">
        <h2>Siz ro'yhatdan o'tgansiz</h2>
        <Link className="main-page__link" to={"/main"}>
          Main Page
        </Link>
      </div>
    </section>
  ) : (
    <section className="login-page">
      <form action="" id="login-form">
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="email" placeholder="email" />
        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" placeholder="password" />
        <button onClick={loginFunction} className="login-btn">
          Log In
        </button>
      </form>
    </section>
  );
}

export default LogIn;
