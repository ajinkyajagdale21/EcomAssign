import React, { useState } from "react";
import styles from "../generalStyles.module.css";
import { useNavigate } from "react-router-dom";


export const LoginPage = ({setIsAuthenticated}) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    if(loginData.email && loginData.password){
        setIsAuthenticated(true)
        navigate("/")
    }
  };
  return (
    <div className={styles.signupContainer}>
      <div className={styles.cardContainer}>
        <h2 className={styles.sectionHeader}>Login</h2>
        <h4 style={{ textAlign: "center", padding: "0" }}>Welcome back to ECOMMERCE</h4>
        <p style={{ textAlign: "center", padding: "0", fontSize: "small" }}>The next gen business marketplace</p>
        <form onSubmit={submitLogin}>
          <div className={styles.fieldContainer}>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter" className={styles.inputField} onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))} />
          </div>
          <div className={styles.fieldContainer}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter"
              className={styles.inputField}
              onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))}
            />
          </div>
          <button className={styles.submitButton}>LOGIN</button>
          <span className={styles.linkContainer}>
            <p>Don't have an Account?</p>
            <button type="submit" className={styles.LoginBtn}>
              SIGN UP
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
