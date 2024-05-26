export const setLocalStorageItem = (name: string, value: string) => {
  localStorage.setItem(name, value);
};

export const getLocalStorageItem = (name: string): string | null => {
  return localStorage.getItem(name);
};

export const deleteLocalStorageItem = (name: string) => {
  localStorage.removeItem(name);
};

export const isUserLoggedIn = (): boolean => !localStorage.getItem("userData");
