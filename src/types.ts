import { Locations } from './constants';

export type Location = typeof Locations[keyof typeof Locations];

export type HousingType = 'apartment' | 'room' | 'house' | 'hotel';

type City = {
  name: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: HousingType;
  price: number;
  previewImage: string;
  city: City;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};
