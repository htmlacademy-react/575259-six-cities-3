import { LoginCurrentLocation } from '../../components/login-current-location';
import { LoginForm } from '../../components/login-form';

export const Login = () => (
  <main className="page__main page__main--login">
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <LoginForm />
      </section>
      <LoginCurrentLocation currentLocation="Amsterdam" />
    </div>
  </main>
);
