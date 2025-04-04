import { Offer } from '../../types';
import { OfferCard } from '../offer-card';

type FavoriteLocationOffersProps = {
  favoriteLocationOffers: Offer[];
  locationName: string;
};

export const FavoriteLocationOffers = ({
  locationName,
  favoriteLocationOffers,
}: FavoriteLocationOffersProps) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{locationName}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {favoriteLocationOffers.map((favoriteLocationOffer) => (
        <OfferCard
          key={favoriteLocationOffer.id}
          offer={favoriteLocationOffer}
          cardType="favorites"
        />
      ))}
    </div>
  </li>
);
