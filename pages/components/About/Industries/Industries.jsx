import React from "react";
import styles from "../../../../styles/About/Industries/Industries.module.css";
import font from "../../../../styles/Fonts.module.css";
import IndustryCard from "./IndustriesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faGasPump,
  faTree,
  faShieldAlt,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import HorizontalLines from "../../Lines";

const Industries = () => {
  return (
    <div className={styles.industryContainer}>
      <p className={font.greenHeading}>Industries</p>
      <p className={font.blueTagline}>Distinctive Value</p>
      <HorizontalLines />
      <div className={styles.industryCards}>
        <div className={styles.leftContainer}>
          <IndustryCard
            logo={<FontAwesomeIcon icon={faGasPump} />}
            title="Oil & Gas"
            description="UAVs transform the oil and gas industry by enhancing inspections and operational efficiencies. Equipped with advanced sensors, they monitor infrastructure, detect leaks, and enable rapid data collection. Real-time insights empower informed decision-making, optimizing maintenance and mitigating risks."
            cardType="left"
          />
          <IndustryCard
            logo={<FontAwesomeIcon icon={faTree} />}
            title="Environment"
            description="UAVs revolutionize environmental and agricultural applications, optimizing data collection and informed decision-making. They monitor ecosystems, aid conservation, and enhance precision agriculture. With real-time data and aerial perspective, UAVs promote sustainability and boost agricultural productivity."
            cardType="left"
          />
        </div>
        <div className={styles.rightContainer}>
          <IndustryCard
            logo={<FontAwesomeIcon icon={faShieldAlt} />}
            title="Security"
            description="UAVs enhance security operations with advanced sensors, enabling real-time aerial monitoring for improved surveillance capabilities and proactive threat response. They are deployed for border surveillance, event security, and protecting critical infrastructure, ensuring effective security measures and public safety."
            cardType="right"
          />
          <IndustryCard
            logo={<FontAwesomeIcon icon={faCity} />}
            title="Smart Cities"
            description="UAVs play a crucial role in smart city development, aiding urban planning, infrastructure monitoring, and public safety. With advanced sensors, they efficiently collect data for mapping and surveying. UAVs improve emergency response and offer aerial surveillance for traffic monitoring. They optimize efficiency, promote sustainability, and enhance residents' quality of life in smart cities."
            cardType="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Industries;
