import { useEffect, useState } from "react";

// TODO: add some logger here if we have any memory leaks
export const useMediaQuery = (mediaQuery: string) => {
  const [isVerified, setIsVerified] = useState(!!window?.matchMedia?.(mediaQuery)?.matches);

  useEffect(() => {
    if (!window || !window.matchMedia) {
      return;
    };

    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => {
      setIsVerified(!!mediaQueryList.matches);
    };

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler)
    } catch (e) {
      // Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(documentChangeHandler);
    }

    documentChangeHandler();
    return () => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      } catch (e) {
        // Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(documentChangeHandler);
      };
    };
  }, [mediaQuery]);

  return isVerified;
}
