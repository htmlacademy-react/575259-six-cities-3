export const RENTAL_COUNT = 5;

export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

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
