export const getRatingPercentageString = (rating: number): string => {
  const roundedRating = Math.round(rating);
  return `${(roundedRating / 5) * 100}%`;
};

export const capitalize = (text: string): string => text[0].toUpperCase() + text.slice(1);
