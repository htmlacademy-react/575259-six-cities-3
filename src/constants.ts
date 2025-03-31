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
