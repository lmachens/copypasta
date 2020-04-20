import React from 'react';

function useThrottledState(value, timeout) {
  const [throttledValue, setThrottledValue] = React.useState(value);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setThrottledValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return throttledValue;
}

export default useThrottledState;
