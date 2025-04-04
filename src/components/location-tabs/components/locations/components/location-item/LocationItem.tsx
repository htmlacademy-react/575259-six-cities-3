type LocationItemProps = {
  location: string;
};

export const LocationItem = ({ location }: LocationItemProps) => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item" href="#">
      <span>{location}</span>
    </a>
  </li>
);
