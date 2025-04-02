import { getFormattedDate } from '../../helpers/dates';
import { User } from '../../types';

type CommentTypeProps = {
  user: User;
  text: string;
  date: string;
  ratingWidthPercentage: string;
};

export const Comment = ({
  user,
  text,
  date,
  ratingWidthPercentage,
}: CommentTypeProps) => {
  const formattedDate = getFormattedDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{
                width: ratingWidthPercentage,
              }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
};
