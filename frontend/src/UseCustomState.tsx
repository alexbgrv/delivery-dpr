import { useState, ChangeEvent } from 'react';

export const useCustomState = <T extends unknown>(initialValue: T) => {
  const [controlledButtonStyle, setControlledButtonStyle] = useState<T>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setControlledButtonStyle(event.target.value as unknown as T);
  };

  return [controlledButtonStyle, handleChange] as [T, typeof handleChange];
};
