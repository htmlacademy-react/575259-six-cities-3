import { Main } from './pages/main';

type AppProps = {
  rentalCount?: number;
}

export const App = ({ rentalCount = 0 }: AppProps) => <Main rentalCount={rentalCount} />;
