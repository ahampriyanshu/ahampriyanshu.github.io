export const openInNewTab = (url: string) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export const isServer = typeof window === 'undefined';

export const resetApp = () => {
  if (isServer) return;
  localStorage.clear();
  window.location.reload();
};
