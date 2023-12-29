import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ian</h1>
        <p className={styles.description}>         
          I'm a software engineer adept at crafting quality, efficient, and user-centric solutions.
          Proficient in C#, .NET, React and Azure, I excel in Scrum and DevOps, optimizing APIs for seamless integration.
          My commitment to clean code, workshops,
          and problem-solving reflects my dedication to enhancing user experience and driving quality software.
        </p>
        <a href="mailto:ianitaloeng@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
