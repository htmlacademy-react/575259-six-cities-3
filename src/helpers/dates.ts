import { format, parseISO } from 'date-fns';

export const getFormattedDate = (date: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'MMMM yyyy');
};
