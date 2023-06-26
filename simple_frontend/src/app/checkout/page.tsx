'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartModule } from '@/redux/features/cart/selector';
import { cartActions } from '@/redux/features/cart';
import { CartState } from '@/types/store';
import { IMovie } from '@/types/api';
import FilmItem from '@/components/FilmItem/FilmItem';
import Spinner from '@/components/Spinner/Spinner';
import Modal from '@/components/Modal/Modal';

import styles from './checkout.module.css';
import { useGetMoviesQuery } from '@/redux/services/biletApi';

function page() {
  const [cartMovies, setCartMovies] = useState<IMovie[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>('');

  const cartState: CartState = useSelector((state) => selectCartModule(state));
  const totalTickets: number = Object.values(cartState).reduce((a, c) => a + c, 0);
  const dispatch = useDispatch();

  const cartLength = Object.keys(cartState).length;

  const { data: moviesData, isLoading: isMoviesLoading } = useGetMoviesQuery();

  useEffect(() => {
    if (moviesData) {
      const storeKeys = Object.keys(cartState);

      setCartMovies(moviesData.filter((item: IMovie) => storeKeys.includes(item.id)));
    }
  }, [moviesData, cartLength, isMoviesLoading]);

  if (isMoviesLoading) {
    return <Spinner />;
  }

  const handleDeleteMovie = (id: string): void => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = (id: string): void => {
    dispatch(cartActions.reset(id));
    setIsModalOpen(false);
  };

  const handleClosePopup = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <Modal onConfirm={() => handleConfirmDelete(selectedId)} onClose={handleClosePopup} />}
      <div className={styles.container}>
        <ul className={styles.films__list}>
          {cartMovies.length > 0 ? (
            cartMovies.map((movie: IMovie) => (
              <FilmItem key={movie.id} movieData={movie} onDelete={() => handleDeleteMovie(movie.id)} />
            ))
          ) : (
            <h1> Ваша корзина пуста</h1>
          )}
        </ul>

        <div className={styles.totals}>
          <span>Итого билетов:</span>
          <span>{totalTickets}</span>
        </div>
      </div>
    </>
  );
}

export default page;
