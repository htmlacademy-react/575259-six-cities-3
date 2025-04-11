export const Locations = {
  paris: 'Paris',
  cologne: 'Cologne',
  brussels: 'Brussels',
  amsterdam: 'Amsterdam',
  hamburg: 'Hamburg',
  dusseldorf: 'Dusseldorf',
} as const;

type SortingOption = {
  title: string;
  isActive?: boolean;
};

export const SORTING_OPTIONS: SortingOption[] = [
  { title: 'Popular', isActive: true },
  { title: 'Price: low to high' },
  { title: 'Price: high to low' },
  { title: 'Top rated first' },
];

export const IMAGE_CARD_SIZE = {
  default: {
    width: 260,
    height: 200,
  },
  favorite: {
    width: 150,
    height: 110,
  },
};

export const RATING_OPTIONS = [
  { value: 5, title: 'perfect' },
  { value: 4, title: 'good' },
  { value: 3, title: 'not bad' },
  { value: 2, title: 'badly' },
  { value: 1, title: 'terribly' },
] as const;
