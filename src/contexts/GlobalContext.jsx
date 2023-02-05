import { useState } from "react";
import { createContext, useEffect } from "react";
import _ from "lodash";

export const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const set = (config) => {
    setData((prev) => {
      return {
        ...prev,
        ...config,
      };
    });
  };
  useEffect(() => {
    const resize = _.debounce(
      () =>
        set({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      500
    );

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [data.width, data.height]);
  return (
    <GlobalContext.Provider value={(data, set)}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
