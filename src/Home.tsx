import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const Home: Component = () => {
  console.log("hii")
    return (
        <div class={styles.App}>
          <header class={styles.header}>
            <img src={logo} class={styles.logo} alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              class={styles.link}
              href="https://github.com/solidjs/solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              You need to learn Solid now ~ !!!!!
            </a>
          </header>
        </div>
      );

    // return (
    //   <div>This site was made with Solid</div>
    // )
}
export default Home;

