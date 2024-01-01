import { daysOfWeek, monthNames } from '../constants/common.constants';
import { isServer } from './common';

function getMonthName(month: number): string {
  return monthNames[month];
}

function padWithZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}

export function getAbsoluteTimeStamp(inputDate: string): string {
  if (isServer) {
    return '';
  }

  const date = new Date(inputDate);
  const currentDate = new Date();
  const timeDifferenceInHours =
    (currentDate.getTime() - date.getTime()) / (1000 * 60 * 60);

  if (timeDifferenceInHours >= 24) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } else {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
function getRelativeTimeString(timeDifference: number): string {
  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

  if (minutes < 60) {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
  } else if (hours < 24) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  } else if (days < 30) {
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  } else if (months < 12) {
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  } else {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  }
}

export function getRelativeTimeStamp(inputDate: string): string {
  if (isServer) {
    return '';
  }

  const date = new Date(inputDate);
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - date.getTime();

  if (timeDifference < 0) {
    const formattedDate = `${
      daysOfWeek[date.getDay()]
    }, ${date.getDate()} ${getMonthName(
      date.getMonth()
    )} ${date.getFullYear()}, ${padWithZero(date.getHours())}:${padWithZero(
      date.getMinutes()
    )}`;
    return `${formattedDate}`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const formattedTime = `${padWithZero(date.getHours())}:${padWithZero(
      date.getMinutes()
    )}`;
    const relativeTimeString = getRelativeTimeString(timeDifference);
    return `${formattedTime} (${relativeTimeString} ago)`;
  } else {
    const formattedDate = `${
      daysOfWeek[date.getDay()]
    }, ${date.getDate()} ${getMonthName(
      date.getMonth()
    )} ${date.getFullYear()}, ${padWithZero(date.getHours())}:${padWithZero(
      date.getMinutes()
    )}`;
    const relativeTimeString = getRelativeTimeString(timeDifference);
    return `${formattedDate} (${relativeTimeString} ago)`;
  }
}
