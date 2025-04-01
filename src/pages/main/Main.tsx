import { CitiesMap } from '../../components/cities-map';
import { CitiesPlaces } from '../../components/cities-places';
import { Header } from '../../components/header';
import { LocationTabs } from '../../components/location-tabs';
import { Offer } from '../../types';

type MainProps = {
  offers: Offer[];
};

export const Main = ({ offers }: MainProps) => (
  <div className="page page--gray page--main">
    <Header />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <LocationTabs />
      <div className="cities">
        <div className="cities__places-container container">
          <CitiesPlaces offers={offers} />
          <div className="cities__right-section">
            <CitiesMap />
          </div>
        </div>
      </div>
    </main>
  </div>
);
