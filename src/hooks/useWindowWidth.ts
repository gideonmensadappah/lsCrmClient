import { useState, useEffect } from "react";
import { getPageWidth } from "../utils/Healpers/index";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getPageWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getPageWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
