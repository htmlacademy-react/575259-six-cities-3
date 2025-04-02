import { Locations } from './constants';

export type Location = (typeof Locations)[keyof typeof Locations];

export type HousingType = 'apartment' | 'room' | 'house' | 'hotel';
export type OfferCardType = 'cities' | 'favorites';

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

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferDetails = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

export type Comment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};
