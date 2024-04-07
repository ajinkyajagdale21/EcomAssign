import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div>
        <div className={styles.profileSection}>
            <span className={styles.profileItems}>Help</span>
            <span className={styles.profileItems}>Orders & Returns</span>
            <span className={styles.profileItems}>Hi, John</span>
        </div>
        <div className={styles.navSection}>
            <h2>ECOMMERCE</h2>
            <div>
                <span className={styles.navItems}>Categories</span>
                <span className={styles.navItems}>Sale</span>
                <span className={styles.navItems}>Clearance</span>
                <span className={styles.navItems}>New stock</span>
                <span className={styles.navItems}>Trending</span>
            </div>
            <div>
                <SearchIcon/>
                <span style={{margin:"0rem 1.5rem",cursor:"pointer"}}>
                    <ShoppingCartIcon/>
                </span>
            </div>
        </div>
        <div style={{background:"#F4F4F4"}}>
            <p style={{textAlign:"center",fontSize:"small",fontWeight:"600",padding:"0.25rem 0rem"}}>Get 10% off on business sign up</p>            
        </div>
    </div>
  )
}
