import { useWindowWidth } from "./useWindowWidth";

export const useMobile = () => {
  const windowWidth = useWindowWidth();
  const mobileWidth = 600;
  const isMobile = mobileWidth >= windowWidth;

  return isMobile;
};
