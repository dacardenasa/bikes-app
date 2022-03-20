import { useState } from 'react';

export const useToggle = () => {
  const [isOpenComponent, setIsOpenComponent] = useState(false);
  const toggleComponent = () => setIsOpenComponent((c) => !c);
  return {
    isOpenComponent,
    toggleComponent,
  };
};
