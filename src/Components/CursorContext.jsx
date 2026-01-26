/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CursorContext = createContext();

export function CursorProvider({ children }) {
  const isDesktop = typeof globalThis.window !== "undefined" && !("ontouchstart" in window);

  const [cursorEnabled, setCursorEnabled] = useState(() => {
    const saved = localStorage.getItem("customCursor");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("customCursor", cursorEnabled);
  }, [cursorEnabled]);

  const toggleCursor = () => setCursorEnabled((prev) => !prev);

  return (
    <CursorContext.Provider
      value={{
        cursorEnabled: isDesktop && cursorEnabled,
        toggleCursor,
        isDesktop,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);
