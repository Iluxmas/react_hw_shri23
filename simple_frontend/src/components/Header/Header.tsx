'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { selectCartModule } from '@/redux/features/cart/selector';
import { CartState } from '@/types/store';

import styles from './header.module.css';

function Header() {
  const cartState: CartState = useSelector((state) => selectCartModule(state));
  const totalTickets: number = Object.values(cartState).reduce((a, c) => a + c, 0);
  const path = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {path === '/' ? (
          <span className={styles.header__logo}>Билетопоиск</span>
        ) : (
          <Link className={styles.header__logo} href='/'>
            Билетопоиск
          </Link>
        )}
        <Link className={styles.basket__container} href='/checkout'>
          {totalTickets > 0 && <div className={styles.basket__counter}>{totalTickets}</div>}
          <div className={styles.basket__icon}></div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
