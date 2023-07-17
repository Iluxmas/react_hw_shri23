'use client';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import {
  useGetCinemaMoviesQuery,
  useGetCinemasQuery,
  useGetMoviesQuery,
} from '@/redux/services/biletApi';
import { Genres, ICinema, IMovie } from '@/types/api';
import { genreMapFunction, mapGenre } from '@/utils/genreMapFunction';
import FormElementContainer from './FormElementContainer/FormElementContainer';
import Dropdown from '../Dropdown/Dropdown';
import Spinner from '../Spinner/Spinner';
import Select from './Select/Select';
import Input from './Input/Input';

import styles from './filter.module.css';

const Filter = ({ moviesData, cinemaData, setFuncion }) => {
  const [nameFilter, setNameFilter] = useState<string>('');
  const [genreFilter, setGenreFilter] = useState<Genres>('' as Genres);
  const [cinemaFilter, setCinemaFilter] = useState<ICinema>();

  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isCinemaOpen, setIsCinemaOpen] = useState(false);
  const [skip, setSkip] = useState(true);

  const {
    data: cinemaQueryData,
    isLoading: isCinemaLoading,
    isFetching,
  } = useGetCinemaMoviesQuery(cinemaFilter?.id, { skip });

  let filteredMovies = moviesData;
  const genresList: Genres[] = [
    ...new Set<Genres>(moviesData!.map((movie: IMovie) => movie.genre)),
  ];

  if (nameFilter) {
    filteredMovies = filteredMovies?.filter(
      movie => movie.title.indexOf(nameFilter) > -1,
    );
    setFuncion(filteredMovies);
  }

  if (genreFilter) {
    filteredMovies = filteredMovies?.filter(
      movie => movie.genre === mapGenre[genreFilter],
    );
    setFuncion(filteredMovies);
  }

  if (cinemaFilter && !isCinemaLoading) {
    const cinemaIds = cinemaQueryData.map((movie: IMovie) => movie.id);
    filteredMovies = filteredMovies?.filter(
      movie => cinemaIds?.includes(movie.id),
    );
    setFuncion(filteredMovies);
  }

  const handleOptionClick = <T extends Genres | (ICinema | undefined)>(
    setCallback: Dispatch<SetStateAction<T>>,
  ) => {
    return (id: T) => {
      if (id instanceof Object) {
        setSkip(false);
      }
      setCallback(id);
      setIsGenreOpen(false);
      setIsCinemaOpen(false);
    };
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;
    setNameFilter(target.value);
  };

  const handleOpenGenre = () => {
    setIsCinemaOpen(false);
    setIsGenreOpen(prev => !prev);
  };

  const handleOpenCinema = () => {
    setIsGenreOpen(false);
    setIsCinemaOpen(prev => !prev);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <h2 className={styles.sidebar__title}>Фильтр поиска</h2>
        <div className={styles.filter}>
          <FormElementContainer>
            <Input
              label={'Название'}
              onInput={handleInputChange}
              placeHolder={'Введите название'}
            />
          </FormElementContainer>

          <FormElementContainer>
            <Select
              label={'Жанр'}
              onOpen={handleOpenGenre}
              placeHolder={'Выберите жанр'}
              filter={genreFilter}
              isOpen={isGenreOpen}>
              {isGenreOpen && (
                <Dropdown
                  options={genresList.map(genreMapFunction)}
                  onClose={() => setIsGenreOpen(false)}
                  onChoose={handleOptionClick(setGenreFilter)}></Dropdown>
              )}
            </Select>
          </FormElementContainer>

          <FormElementContainer>
            <Select
              label={'Кинотеатр'}
              onOpen={handleOpenCinema}
              placeHolder={'Выберите кинотеатр'}
              filter={cinemaFilter}
              isOpen={isCinemaOpen}>
              {isCinemaOpen && (
                <Dropdown
                  options={cinemaData}
                  onClose={() => setIsCinemaOpen(false)}
                  onChoose={handleOptionClick(setCinemaFilter)}></Dropdown>
              )}
            </Select>
          </FormElementContainer>
        </div>
      </div>
    </aside>
  );
}

export default Filter;
