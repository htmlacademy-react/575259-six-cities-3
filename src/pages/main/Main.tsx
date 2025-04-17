import { CitiesMap } from '../../components/cities-map';
import { Offers } from '../../components/offers';
import { Header } from '../../components/header';
import { LocationTabs } from '../../components/location-tabs';
import { Offer } from '../../types';
import { useEffect, useState } from 'react';

type MainProps = {
  offers: Offer[];
};

export const Main = ({ offers }: MainProps) => {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  useEffect(() => {
    setSelectedOffer(offers[0]);
  }, [offers]);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <Offers offers={offers} />
            <div className="cities__right-section">
              <CitiesMap offers={offers} city={selectedOffer?.city || offers[0].city} selectedOffer={selectedOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
