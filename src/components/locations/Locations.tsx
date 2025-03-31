import { LOCATIONS } from '../../constants';
import { LocationItem } from './components/location-item/LocationItem';

export const Locations = () => (
  <ul className="locations__list tabs__list">
    {LOCATIONS.map((location) => <LocationItem key={location} location={location} />)}
  </ul>
);
