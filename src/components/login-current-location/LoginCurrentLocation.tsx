type LoginCurrentLocationProps = {
  currentLocation: string;
  link?: string;
};

export const LoginCurrentLocation = ({
  currentLocation,
  link = '#',
}: LoginCurrentLocationProps) => (
  <section className="locations locations--login locations--current">
    <div className="locations__item">
      <a className="locations__item-link" href={link}>
        <span>{currentLocation}</span>
      </a>
    </div>
  </section>
);
