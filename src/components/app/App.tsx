import { Main } from '../../pages/main';
import { Offer } from '../../types';

type AppProps = {
  offers: Offer[];
};

export const App = ({ offers }: AppProps) => (
  <Main offers={offers} />
);
