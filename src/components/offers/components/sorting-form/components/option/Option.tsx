import classNames from 'classnames';

type OptionProps = {
  title: string;
  isActive?: boolean;
};

export const Option = ({ title, isActive = false }: OptionProps) => {
  const liClass = classNames('places__option', {
    'places__option--active': isActive,
  });

  return (
    <li className={liClass} tabIndex={0}>{title}</li>
  );
};
