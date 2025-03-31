import { CitiesPlaces } from '../../components/cities-places';
import { Header } from '../../components/header/Header';
import { Locations } from '../../components/locations/Locations';

type MainProps = {
  rentalCount: number;
}

export const Main = ({ rentalCount }: MainProps) => (
  <div className="page page--gray page--main">
    <Header/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Locations />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <CitiesPlaces rentalCount={rentalCount} />
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>
);
