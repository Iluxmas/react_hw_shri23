import { State } from '@/types/store';

export const selectFilteredMovies = (state: State) => state.filter.filtered;
export const selectFilterLoadedStatus = (state: State) => state.filter.isLoaded;
