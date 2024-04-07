import React, { useState } from "react";
import styles from "../generalStyles.module.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate()
  const [signupData,setSignupData]=useState({
    name:"",
    email:"",
    password:""
  })  
  
  const submitSignup=(e)=>{
    e.preventDefault()

    if(signupData.name && signupData.email && signupData.password){
     navigate("/verify")
    }
  }
  return (
    <div className={styles.signupContainer}>
      <div className={styles.cardContainer}>
        <h2 className={styles.sectionHeader}>Create your account</h2>
        <form onSubmit={submitSignup}>
          <div className={styles.fieldContainer}>
            <label className={styles.fieldLabel} htmlFor="name">
              Name
            </label>
            <input id="name" placeholder="Enter" className={styles.inputField} onChange={(e)=>setSignupData(prev=>({...prev,name:e.target.value}))} />
          </div>
          <div className={styles.fieldContainer}>
            <label htmlFor="email">Email</label>
            <input id="email" placeholder="Enter" className={styles.inputField} onChange={(e)=>setSignupData(prev=>({...prev,email:e.target.value}))} />
          </div>
          <div className={styles.fieldContainer}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter" className={styles.inputField} onChange={(e)=>setSignupData(prev=>({...prev,password:e.target.value}))} />
          </div>
          <button className={styles.submitButton}>CREATE ACCOUNT</button>
          <span className={styles.linkContainer}>
            <p>Have an Account?</p>
            <button type="submit" className={styles.LoginBtn}>LOGIN</button> 
          </span>
        </form>
      </div>
    </div>
  );
};
