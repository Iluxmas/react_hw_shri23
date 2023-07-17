import React from 'react';
import styles from './ticketCounter.module.css';

import { selectProductCount } from '@/redux/features/cart/selector';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { cartActions } from '@/redux/features/cart';

interface TickerCOunterProps {
  id: string;
  onDelete?: () => void;
}

const TicketCounter = ({ id, onDelete }: TickerCOunterProps) => {
  const ticketsAmount = useSelector(state => selectProductCount(state, id));
  const dispatch = useDispatch();

  const path = usePathname();

  const handleMinus =
    ticketsAmount > 1 ? () => dispatch(cartActions.decrement(id)) : onDelete;
  const handlePlus = () => dispatch(cartActions.increment(id));
  return (
    <div className={styles.film__tickets}>
      <button
        className={styles.film__icon_minus}
        style={ticketsAmount === 0 ? {} : { backgroundColor: '#F50' }}
        onClick={handleMinus}
        disabled={ticketsAmount === 0}></button>
      <span className={styles.film__ticketsAmount}>{ticketsAmount}</span>
      <button
        className={styles.film__icon_plus}
        style={ticketsAmount >= 30 ? { backgroundColor: '#FFA375' } : {}}
        onClick={handlePlus}
        disabled={ticketsAmount >= 30}></button>
      {path === '/checkout' && (
        <button className={styles.film__delete} onClick={onDelete}></button>
      )}
    </div>
  );
}

export default TicketCounter;
