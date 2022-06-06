import { useEffect, useState } from "react";

const getStorageValue = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key) || defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
