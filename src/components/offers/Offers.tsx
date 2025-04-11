import { useState } from 'react';
import { Offer } from '../../types';
import { OfferCard } from '../offer-card';
import { SortingForm } from './components/sorting-form';

type OffersProps = {
  offers: Offer[];
};

export const Offers = ({ offers }: OffersProps) => {
  const [, setCurrentOfferId] = useState<string | null>(null);

  const handleOfferHover = (offerId: string | null) => {
    setCurrentOfferId(offerId);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <SortingForm />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferHover={handleOfferHover}
          />
        ))}
      </div>
    </section>
  );
};
