import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);
    const listener = _.debounce(() => setMatches(media.matches), 30);

    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
