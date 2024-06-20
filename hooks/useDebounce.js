import { useEffect, useRef } from "react";

export function useDebounce(callback, delay) {
  const timeoutId = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  function debouncedCallback(...args) {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  return debouncedCallback;
}
