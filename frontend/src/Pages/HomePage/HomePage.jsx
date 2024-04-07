import React, { useState } from 'react'
import styles from "../generalStyles.module.css";
import { Items } from '../../demoData';

export const HomePage = () => {
    const [selectedItems, setSelectedItems] = useState(
        Items.reduce((acc, item) => (acc[item.id] = item.checked, acc), {})
      );
    
      const handleCheckboxChange = (itemId) => {
        setSelectedItems((prevItems) => ({
          ...prevItems,
          [itemId]: !prevItems[itemId], 
        }));
      };
  return (
    <div className={styles.signupContainer}>
    <div className={styles.cardContainer}>
      <h2 className={styles.sectionHeader}>Please mark your interests!</h2>
      <p style={{textAlign:"center",padding:"0",fontSize:"small"}}>We will keep you notified.</p>
        <div className={styles.fieldContainer}>
          <label>My saved interests!</label>
          {Items.map((item) => (
            <div key={item.id} className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id={item.id}
                checked={selectedItems[item.id]} 
                onChange={() => handleCheckboxChange(item.id)} 
              />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
          ))}
        </div>
    </div>
  </div>
  )
}
