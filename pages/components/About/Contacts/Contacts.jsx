import React from 'react';
import ContactsCard from './ContactsCard';
import styles from '../../../../styles/About/Contacts/Contacts.module.css';
import font from '../../../../styles/Fonts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const ContactsComponent = () => {
  return (
    <div className={styles.cardContainer}>
      <ContactsCard
        logo={<FontAwesomeIcon icon={faMapMarkerAlt} />}
        title="Location"
        info1="7409 King Abdulaziz - King Abdulaziz Dist. Unit No 1 "
        info2="Riyadh 12233-3964 Kingdom of Saudi Arabia "
        titleClassName={font.blueTagline}
        info1ClassName={font.taglineInGrey}
        info2ClassName={font.taglineInGrey}
      />
      <ContactsCard
        logo={<FontAwesomeIcon icon={faPhone} />}
        title="Phone Number"
        info1="011-4546083"
        titleClassName={font.blueTagline}
        info1ClassName={font.taglineInGrey}
      />
      <ContactsCard
        logo={<FontAwesomeIcon icon={faLocationArrow} />}
        title="Email"
        info1="info@intra.sa"
        titleClassName={font.blueTagline}
        info1ClassName={font.taglineInGrey}
      />
    </div>
  );
};

export default ContactsComponent;
