import { isServer } from './common';
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function getAbsoluteTimeStamp(inputDate: string): string {
  if (isServer) {
    return '';
  }
  const date = new Date(inputDate);
  const currentDate = new Date();
  const timeDifference = date.getTime() - currentDate.getTime();
  if (timeDifference >= 24 * 60 * 60 * 1000) {
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    return `${day} ${month}`;
  } else {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}

export function getRelativeTimeStamp(inputDate: string): string {
  if (isServer) {
    return '';
  }
  const date = new Date(inputDate);
  const formattedDate = `${
    daysOfWeek[date.getUTCDay()]
  }, ${date.getUTCDate()} ${getMonthName(
    date.getUTCMonth()
  )} ${date.getUTCFullYear()}, ${padWithZero(date.getUTCHours())}:${padWithZero(
    date.getUTCMinutes()
  )}`;

  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - date.getTime();
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

  // Format the time difference
  const timeAgo = `(${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago)`;

  return `${formattedDate} ${timeAgo}`;
}

function getMonthName(month: number): string {
  return monthNames[month];
}

function padWithZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
