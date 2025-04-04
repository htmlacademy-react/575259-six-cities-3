import classNames from 'classnames';
import { OfferDetails } from '../../types';
import { capitalize, getRatingPercentageString } from '../../helpers/strings';
import { useMemo } from 'react';
import { COMMENTS } from '../../mock/comments';
import { OFFERS } from '../../mock/offers';
import { OfferCard } from '../../components/offer-card';
import { ReviewForm } from '../../components/review-form';
import { Comment } from '../../components/comment';

type OfferProps = {
  offer: OfferDetails;
};

export const Offer = ({ offer }: OfferProps) => {
  const {
    images,
    isPremium,
    isFavorite,
    title,
    rating,
    bedrooms,
    maxAdults,
    type,
    price,
    goods,
    host,
    description,
  } = offer;

  const bookmarkButtonClass = classNames('button', 'offer__bookmark-button', {
    'offer__bookmark-button--active': isFavorite,
  });

  const hostAvatarClass = classNames(
    'offer__avatar-wrapper',
    'user__avatar-wrapper',
    {
      'offer__avatar-wrapper--pro': host.isPro,
    }
  );

  const offerRatingWidthPercentage = getRatingPercentageString(rating);

  const sentences = useMemo(() => description.split('.'), [description]);

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((image) => (
              <div key={image} className="offer__image-wrapper">
                <img className="offer__image" src={image} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <button className={bookmarkButtonClass} type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: offerRatingWidthPercentage }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {rating}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {capitalize(type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((good) => (
                  <li key={good} className="offer__inside-item">
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={hostAvatarClass}>
                  <img
                    className="offer__avatar user__avatar"
                    src={host.avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{host.name}</span>
                {host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                {sentences.map((sentence) => (
                  <p key={sentence} className="offer__text">
                    {sentence}
                  </p>
                ))}
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews &middot; <span className="reviews__amount">1</span>
              </h2>
              <ul className="reviews__list">
                {COMMENTS.map(
                  ({ id, rating: commentRating, comment, date, user }) => {
                    const commentRatingWidthPercentage =
                      getRatingPercentageString(commentRating);

                    return (
                      <Comment
                        key={id}
                        user={user}
                        text={comment}
                        date={date}
                        ratingWidthPercentage={commentRatingWidthPercentage}
                      />
                    );
                  }
                )}
              </ul>
              <ReviewForm />
            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {OFFERS.slice(0, 3).map((nearOffer) => (
              <OfferCard key={nearOffer.id} offer={nearOffer} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
