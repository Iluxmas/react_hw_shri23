'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { IMovie } from '@/types/api';
import { genreMapFunction } from '@/utils/genreMapFunction';
import TicketCounter from './TicketCounter/TicketCounter';
import CardContainer from '../CardContainer/CardContainer';

import styles from './filmitem.module.css';

interface FilmItemProps {
  movieData: IMovie;
  onDelete?: () => void;
}

const FilmItem: FC<FilmItemProps> = ({ movieData, onDelete }) => {
  return (
    <CardContainer style={styles.film}>
      <img
        className={styles.film__poster}
        src={movieData.posterUrl}
        alt={`image for ${movieData.title} film`}
      />
      <div className={styles.film__details}>
        <div className={styles.film__info}>
          <Link className={styles.film__title} href={`/movies/${movieData.id}`}>
            {movieData.title}
          </Link>
          <p className={styles.film__genre}>
            {genreMapFunction(movieData.genre)}
          </p>
        </div>
        <TicketCounter id={movieData.id} onDelete={onDelete} />
      </div>
    </CardContainer>
  );
};

export default FilmItem;
