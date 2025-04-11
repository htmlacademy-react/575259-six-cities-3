import { ChangeEvent, Fragment, useState } from 'react';
import { RATING_OPTIONS } from '../../constants';

export const ReviewForm = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [reviewMessage, setReviewMessage] = useState<string>('');

  const handleReviewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewMessage(event.target.value);
  };

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
      Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_OPTIONS.map(({ value, title }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleRatingChange}
              checked={rating === value}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewMessage}
        onChange={handleReviewMessageChange}
        minLength={50}
        maxLength={300}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={rating === null || reviewMessage.length < 50}
        >
        Submit
        </button>
      </div>
    </form>
  );
};
