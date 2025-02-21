export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatTo12Hour(hour: number): number {
  return hour % 12 || 12;
}

export function getAmPm(hour: number): string {
  return hour >= 12 ? 'PM' : 'AM';
}

export function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) return 'th';

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
