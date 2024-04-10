/*"use client";

import React, {
  useContext,
  useRef,
  useState,
  createContext,
  useEffect,
} from "react";

type DropdownProviderProps = {
  children?: React.ReactNode;
};

type DropdownContextType = {
  dropdownMenu: boolean;
  setDropdownMenu: React.Dispatch<React.SetStateAction<boolean>>;
  elementRef: React.RefObject<HTMLDivElement>;
};

const defaultDropdownContext = {
  dropdownMenu: false,
  setDropdownMenu: () => {},
  elementRef: { current: null },
};

export const DropdownContext = createContext<DropdownContextType>(
  defaultDropdownContext
);

export default function DropdownMenuContext({
  children,
}: DropdownProviderProps) {
  const elementRef = useRef(null);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  function useClickOutside(
    ref: React.RefObject<HTMLDivElement>,
    onClickOutside: () => void
  ) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          onClickOutside();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }

  console.log(dropdownMenu);

  useClickOutside(elementRef, () => {
    setDropdownMenu(false);
  });

  return (
    <DropdownContext.Provider
      value={{
        dropdownMenu,
        setDropdownMenu,
        elementRef,
      }}
    >
      <div ref={elementRef}>{children}</div>
    </DropdownContext.Provider>
  );
}

export function useDropdownProviderContext() {
  const context = useContext(DropdownContext);
  if (context === null) {
    throw new Error(
      "useDropdownProviderContext must be used within a DropdownProvider"
    );
  }
  return context;
}*/
