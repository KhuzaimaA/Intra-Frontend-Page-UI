import React, { useState } from "react";
import styles from "./home.module.css";
import font from "../../styles/Fonts.module.css";
import CircleLayout from "../components/About/IntraInNumbers/AboutCircleLayout";
import Footer from "../components/Footer/footer";
import ContactsComponent from "../components/About/Contacts/Contacts";
import JoinUsContainer from "../components/About/JoinUs/JoinUs";
import News from "../components/About/News/News";
import Industries from "../components/About/Industries/Industries";
import Products from "../components/About/Products/Products";
import NavigationBar from "../components/About/NavBar/NavBar";
import Capabilities from "../components/About/Capabilities/Capabilities";
import Leaders from "../components/About/Leaders/Leaders";
import OurVision from "../components/About/Vision/OurVision";
import AboutUs from "../components/About/AboutUs/AboutUs";

const IndexPage = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.colorHalf}>
          <p className={font.whiteHeadingText}>
            "Ambitions as High as the Sky”
          </p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.imageHalf}>
          <NavigationBar
            isNavbarVisible={isNavbarVisible}
            handleToggleNavbar={handleToggleNavbar}
          />
        </div>
      </div>

      <div className={styles.secondaryContainer}>
        <div id="aboutUs">
          <AboutUs />
        </div>
        <div id="ourVision">
          <OurVision />
        </div>
        <div id="leaders">
          <Leaders />
        </div>
        <div id="IntraInNumbers">
          <CircleLayout />
        </div>
        <div id="products">
          <Products />
        </div>
        <div id="industries">
          <Industries />
        </div>
        <div id="capabilities">
          <Capabilities />
        </div>
        <div id="news">
          <News />
        </div>
        <div id="careers">
          <JoinUsContainer />
        </div>
        <div id="contacts">
          <ContactsComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
