import { useEffect, useState } from 'react';

function useDebounce(value: string, delay: number): string {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const handleDelay = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handleDelay);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
