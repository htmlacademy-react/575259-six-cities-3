import { FavoriteLocationOffers } from '../../components/favorite-location-offers';
import { Locations } from '../../constants';
import { OFFERS } from '../../mock/offers';

export const Favorites = () => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {Object.values(Locations)
            .slice(0, 2)
            .map((location) => (
              <FavoriteLocationOffers
                key={location}
                locationName={location}
                favoriteLocationOffers={OFFERS.slice(0, 3)}
              />
            ))}
        </ul>
      </section>
    </div>
  </main>
);
