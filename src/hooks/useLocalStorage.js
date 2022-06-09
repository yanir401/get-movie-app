import { useEffect, useState } from "react";

const getStorageValue = (key) => {
  const getStorageData = localStorage.getItem(key);
  if (getStorageData !== "undefined") return JSON.parse(getStorageData);
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
