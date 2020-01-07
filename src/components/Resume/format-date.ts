import { format } from 'date-fns';

export const formatShortDate = (date: Date) => format(date, 'MMM. yyyy');
