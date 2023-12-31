export function formatTime(dateString: Date): string {
  const date = new Date(dateString);
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
