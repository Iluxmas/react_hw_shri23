export type CartState = {
  [key: string]: number;
};

export interface State {
  cart: CartState;
  filter: FilterState;
}

export type FilterState = {
  isLoaded: boolean;
  filtered: [];
};
