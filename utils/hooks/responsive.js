import { useMediaQuery } from 'react-responsive';
export const useResponsive = (inView) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = !isMobile;

  return { isMobile, isDesktop };
};
