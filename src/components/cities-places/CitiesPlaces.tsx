import { CitiesCard } from '../cities-card/CitiesCard';
import { SortingForm } from './components/sorting-form';

type CitiesPlacesProps = {
  rentalCount: number;
}

export const CitiesPlaces = ({ rentalCount }: CitiesPlacesProps) => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">312 places to stay in Amsterdam</b>
    <SortingForm/>
    <div className="cities__places-list places__list tabs__content">
      {Array.from({ length: rentalCount }, (_, i) => i).map((citiesCard) => <CitiesCard key={citiesCard} />)}
    </div>
  </section>
);
