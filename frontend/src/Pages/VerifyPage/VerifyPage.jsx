import React, { useState } from 'react'
import styles from "../generalStyles.module.css";
import { InputOTP } from 'antd-input-otp';
import { useNavigate } from "react-router-dom";

export const VerifyPage = () => {
    const [value, setValue] = useState([]); 
    const navigate = useNavigate()
    const handleFinish = (otp) => {
      const payload = otp || value;
      if(payload.length===6){
        navigate("/login")
      }
      console.log(payload);
    };  
  return (
    <div className={styles.signupContainer}>
    <div className={styles.cardContainer}>
      <h2 className={styles.sectionHeader}>Verify your email</h2>
      <p style={{textAlign:"center",padding:"0",fontSize:"small"}}>Enter the 8 digit code you have received on swa***@gmail.com</p>
        <div className={styles.fieldContainer}>
          <label>Code</label>
          <InputOTP style={{margin:"1rem 0rem"}} onChange={setValue} value={value} autoSubmit={handleFinish} />
        </div>
        <button className={styles.submitButton} onClick={() => handleFinish()}>VERIFY</button>
    </div>
  </div>
  )
}
