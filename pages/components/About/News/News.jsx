import React from "react";
import styles from "../../../../styles/About/News/News.module.css";
import font from "../../../../styles/Fonts.module.css";
import HorizontalLines from "../../Lines";


const News = () => {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.textContainer}>
        <div className={styles.newsContainerLeft}>
          <div className={styles.newsImage}>
            <div className={styles.overlayTextLeft}>
              <p className={font.greenHeading}>News</p>
              <p className={font.blueTagline}>Check our Latest News</p>
              <HorizontalLines />
            </div>
          </div>
        </div>
        <div className={styles.newsContainerRight}>
          <p className={font.greenBorderTransparentText}>News</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div>
          <img
            src="/images/news1.jpeg"
            alt="News Image 1"
            className={styles.newsImage1}
          />
          <h1 className={`${font.blueTaglineShorter} ${styles.newsText}`}>
            Human Resource Development Initiatives
          </h1>
          <h1 className={`${font.taglineInGreyShorter} ${styles.newsText}`}>
            As part of its commitment to developing its human resources, INTRA
            offers various specialized courses in relevant fields.
          </h1>
        </div>
        <div>
          <img
            src="/images/CEO.jpeg"
            alt="News Image 2"
            className={styles.newsImage2}
          />
          <h1 className={`${font.blueTaglineShorter} ${styles.newsText}`}>
            New CEO
          </h1>
          <h1 className={`${font.taglineInGreyShorter} ${styles.newsText}`}>
            We are excited to announce the appointment of our NEW CEO, Dr.Hamad
            Alfouzan.
          </h1>
        </div>
        <div>
          <img
            src="/images/news3.jpeg"
            alt="News Image 3"
            className={styles.newsImage3}
          />
          <h1 className={`${font.blueTaglineShorter} ${styles.newsText}`}>
            INTRA - AKAER
          </h1>
          <h1 className={`${font.taglineInGreyShorter} ${styles.newsText}`}>
            INTRA has signed an agreement with the Brazilian company AKAER with
            the aim of cooperation in the technical field, exchanging expertise,
            and exploring export opportunities.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default News;
