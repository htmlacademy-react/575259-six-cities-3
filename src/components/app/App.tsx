import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/main';
import { Offer } from '../../types';
import { NotFound } from '../../pages/not-found';
import { Login } from '../../pages/login';
import { Favorites } from '../../pages/favorites';
import { Offer as OfferPage } from '../../pages/offer';
import { PrivateRoute } from '../private-route';
import { offer } from '../../mocks/offer';
import { COMMENTS } from '../../mocks/comments';

type AppProps = {
  offers: Offer[];
};

export const App = ({ offers }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Main offers={offers} />} />
        <Route path='login' element={<Login />} />
        <Route path='favorites' element={
          <PrivateRoute hasAccess={false}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path='offer/:id' element={
          <OfferPage offer={offer}
            comments={COMMENTS}
            nearOffers={offers.slice(0, 3)}
          />
        }
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
