import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <ul className={styles.footer__linkslist}>
          <li>
            <Link className={styles.footer__link} href='/FAQ'>
              Вопросы-ответы
            </Link>
          </li>
          <li>
            <Link className={styles.footer__link} href='/about-us'>
              О нас
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
