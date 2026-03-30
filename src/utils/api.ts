const DEFAULT_API_PORT = "3002";

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const getApiBaseUrl = () => {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL;
  if (configuredBaseUrl) {
    return trimTrailingSlash(configuredBaseUrl);
  }

  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.hostname}:${DEFAULT_API_PORT}`;
  }

  return `http://localhost:${DEFAULT_API_PORT}`;
};

export const API_BASE_URL = getApiBaseUrl();
