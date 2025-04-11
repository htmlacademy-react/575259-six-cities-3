import classNames from 'classnames';
import { Offer, OfferCardType } from '../../types';
import { Link } from 'react-router-dom';
import { getRatingPercentageString } from '../../helpers/strings';
import { IMAGE_CARD_SIZE } from '../../constants';

type OfferCardProps = {
  offer: Offer;
  cardType?: OfferCardType;
  onOfferHover?: (offerId: string | null) => void;
};

export const OfferCard = ({ offer, cardType = 'cities', onOfferHover = () => {} }: OfferCardProps) => {
  const { id, title, type, price, previewImage, isPremium, isFavorite, rating } =
    offer;

  const favoriteButtonClass = classNames(
    'place-card__bookmark-button',
    'button',
    {
      'place-card__bookmark-button--active': isFavorite,
    }
  );

  const isFavoriteCard = cardType === 'favorites';

  const cardInfoClass = classNames('place-card__info', {
    'favorites__card-info': isFavoriteCard,
  });

  const ratingWidthPercentage = getRatingPercentageString(rating);

  const imgSize = {
    width: isFavoriteCard
      ? IMAGE_CARD_SIZE.favorite.width
      : IMAGE_CARD_SIZE.default.width,
    height: isFavoriteCard
      ? IMAGE_CARD_SIZE.favorite.height
      : IMAGE_CARD_SIZE.default.height,
  };

  const handleOfferMouseLeave = () => {
    onOfferHover(null);
  };

  const handleOfferMouseEnter = () => {
    onOfferHover(id);
  };

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={handleOfferMouseEnter}
      onMouseLeave={handleOfferMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgSize.width}
            height={imgSize.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cardInfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteButtonClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingWidthPercentage }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};
