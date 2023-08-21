import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/About/NavBar/NavBar.module.css";

const NavigationBar = ({ isNavbarVisible, handleToggleNavbar }) => {
  const menuClass = isNavbarVisible ? `${styles.navigationMenu} ${styles.show}` : styles.navigationMenu;

  const handleCloseNavbar = () => {
    if (isNavbarVisible) {
      handleToggleNavbar();
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <FontAwesomeIcon
        icon={faBars}
        className={styles.hamburgerIcon}
        onClick={handleToggleNavbar}
      />
      {isNavbarVisible && (
        <div className={menuClass} onClick={handleCloseNavbar}>
          <a href="#aboutUs">About Us</a>
          <a href="#ourVision">Our Vision</a>
          <a href="#leaders">Leaders</a>
          <a href="#IntraInNumbers">Intra in Numbers</a>
          <a href="#products">Products</a>
          <a href="#industries">Industries</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#news">News</a>
          <a href="#careers">Careers</a>
          <a href="#contacts">Contacts</a>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
