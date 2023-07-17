import FilmDescription from '@/components/FilmDescription/FilmDescription';
import Reviews from '@/components/Review/Reviews';
import React, { ReactElement } from 'react';
import styles from './moviePage.module.css';

const Page: React.FC<{ params: { movieId: string } }> = ({
  params,
}): ReactElement => {
  return (
    <div className={styles.container}>
      <FilmDescription movieId={params.movieId}></FilmDescription>
      <Reviews movieId={params.movieId}></Reviews>
    </div>
  );
};

export default Page;
