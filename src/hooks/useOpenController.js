import {useCallback, useState} from 'react'

export default function useOpenController (initialState) {
  const [isOpen, setOpenState] = useState(initialState);

  const toogle = useCallback(() => {
    setOpenState((state) => !state);
  }, [setOpenState]);

  return { isOpen, toogle}
}
