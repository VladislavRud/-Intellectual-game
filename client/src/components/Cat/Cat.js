import React from 'react';
import styles from './style.module.css';

function Cat({ url }) {
  return (
    <div>
      <img className={styles.img} alt="cotic" src={url} />
    </div>
  );
}

export default Cat;
