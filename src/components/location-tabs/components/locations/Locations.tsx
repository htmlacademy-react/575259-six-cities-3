import { Locations } from '../../../../constants';
import { LocationItem } from './components/location-item';

export const LocationsList = () => (
  <ul className="locations__list tabs__list">
    {Object.values(Locations).map((location) => (
      <LocationItem key={location} location={location} />
    ))}
  </ul>
);
