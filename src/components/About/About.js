import React from 'react';
import styles from './About.module.css';

const About = () => {

  return (
    <div id="about" className={styles.mainContainer}>
      <h1>About Me</h1>
      <p> &ensp; Over the course of two years and multiple full-stack projects, I have developed a strong foundation in both front-end and back-end development. I have experience with a range of languages and frameworks including JavaScript, Java, HTML, CSS, TypeScript, React and Express. I am passionate about building scalable, efficient, and secure web applications that meet the needs of my clients. I have a strong focus on user experience and I always strive to create intuitive and responsive designs that are both functional and visually appealing. I have a keen eye for detail and a problem-solving mindset, which enables me to identify and resolve issues quickly and efficiently. Whether it's building a custom web application from scratch or optimizing an existing one, I am confident in my ability to deliver quality results that exceed expectations. Outside of programming, I enjoy spending time in nature, something that is readily available to me living in Vancouver. I also enjoy watching UFC, playing team sports, and playing video games with my friends.
      </p>
    </div>
  );
};

export default About;