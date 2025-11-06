export const toast = {
  success: (message: string) => {
    console.log('[Success]', message);
    // Implement toast logic here
  },
  error: (message: string) => {
    console.error('[Error]', message);
    // Implement toast logic here
  },
  warning: (message: string) => {
    console.warn('[Warning]', message);
    // Implement toast logic here
  },
  info: (message: string) => {
    console.info('[Info]', message);
    // Implement toast logic here
  }
};