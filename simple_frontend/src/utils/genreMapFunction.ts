import { Genres } from '@/types/api';

export const mapGenre = {
  фэнтези: 'fantasy',
  ужасы: 'horror',
  экшен: 'action',
  комедия: 'comedy',
};

export const genreMapFunction = (input: Genres): string => {
  switch (input) {
    case 'fantasy':
      return 'фэнтези';
    case 'horror':
      return 'ужасы';
    case 'action':
      return 'экшен';
    case 'comedy':
      return 'комедия';
    default:
      return input;
  }
}
