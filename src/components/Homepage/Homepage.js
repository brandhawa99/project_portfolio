import React from 'react';
import styles from './Homepage.module.css';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? 'var(--accent)' : "var(--background-primary)"};
  color: ${props => props.primary ? "var(--background-primary)" : "var(--accent)"};

  font-size: 1em;

  margin: 1em;
  padding: .5em.35em;
  border: 2px solid var(--accent);
  border-radius: 3px;
  flex: -1;
  font-weight:800;
`;

const Homepage = () =>{

  return(
    <div className={styles.mainContainer}>
      <h2 className={styles.mainText}>
        Hi, my name is Baltej Randhawa, 
        and I'm a full stack developer from Vancouver BC. I love web devlopment 
        because of the fact that there is always something new to learn.
        From front-end to back-end, when your bredth gets wide you can increase the depth of your knowledge.

      </h2>
      <div className={styles.buttonContainer}>
        <Button primary>About Me</Button>
        <Button primary>Projects</Button>
        <Button >Contact Me</Button>
      </div>

    </div>
  );
};

export default Homepage;