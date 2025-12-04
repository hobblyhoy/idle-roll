import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { initializeBreakpointListener, selectIsMobile } from './viewportSlice';

export const useBreakpoint = () => {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector(selectIsMobile);

  useEffect(() => {
    initializeBreakpointListener(dispatch);
  }, [dispatch]);

  return { isMobile };
};
