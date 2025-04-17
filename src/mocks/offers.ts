import { Offer } from '../types';

export const OFFERS: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 201,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.6,
  },
  {
    id: '2',
    title: 'Loft Studio in the Central Area',
    type: 'house',
    price: 923,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.4,
  },
  {
    id: '3',
    title: 'Tile House',
    type: 'apartment',
    price: 129,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.2,
  },
  {
    id: '4',
    title: 'The house among olive ',
    type: 'hotel',
    price: 497,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.9,
  },
];
