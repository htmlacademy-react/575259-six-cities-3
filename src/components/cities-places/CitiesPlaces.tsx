import { Offer } from '../../types';
import { CitiesCard } from '../cities-card/CitiesCard';
import { SortingForm } from './components/sorting-form';

type CitiesPlacesProps = {
  offers: Offer[];
};

export const CitiesPlaces = ({ offers }: CitiesPlacesProps) => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">312 places to stay in Amsterdam</b>
    <SortingForm />
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard key={offer.id} offer={offer} />
      ))}
    </div>
  </section>
);
