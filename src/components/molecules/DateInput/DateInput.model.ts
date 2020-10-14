export interface IDateInput {
  isOpen?: boolean;
  labelName: string;
  handleDate: (date: string) => void;
}

export const daysOfTheWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'Mai',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
