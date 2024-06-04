"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type HeaderContextProviderProps = {
  children: React.ReactNode;
};

type HeaderContextType = {
  dropdownMenu: boolean;
  setDropdownMenu: React.Dispatch<React.SetStateAction<boolean>>;
  elementRef: React.RefObject<HTMLDivElement>;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  settings: boolean;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  activeSetting: string;
  setActiveSetting: React.Dispatch<React.SetStateAction<string>>;
  settingClicked: boolean;
  setSettingClicked: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal: () => void;
  handleSettings: (e: string) => void;
  loggingIn: boolean;
  setLoggingIn: React.Dispatch<React.SetStateAction<boolean>>;
  loggingSuccess: boolean;
  setLoggingSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  loggingError: boolean;
  setLoggingError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);

export default function HeaderProvider({
  children,
}: HeaderContextProviderProps) {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);
  const [settingClicked, setSettingClicked] = useState(false);
  const [activeSetting, setActiveSetting] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggingSuccess, setLoggingSuccess] = useState(false);
  const [loggingError, setLoggingError] = useState(false);

  const elementRef = useRef(null);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleModal: () => void = () => {
    if (!menu) {
      setMenu(true);
      setDropdownMenu(true);
      setSettings(true);
    } else {
      setMenu(false);
      setDropdownMenu(false);
      setSettings(false);
      setSettingClicked(false);
    }
  };

  const handleSettings = (setting: string) => {
    if (settings) {
      setActiveSetting(setting);
      setSettingClicked(true);
    }
  };

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

  useClickOutside(elementRef, () => {
    setDropdownMenu(false);
    setMenu(false);
  });

  return (
    <HeaderContext.Provider
      value={{
        setDropdownMenu,
        dropdownMenu,
        elementRef,
        menu,
        setMenu,
        setSettings,
        settings,
        activeSetting,
        setActiveSetting,
        setSettingClicked,
        settingClicked,
        handleSettings,
        handleModal,
        loggingIn,
        setLoggingIn,
        loggingSuccess,
        setLoggingSuccess,
        loggingError,
        setLoggingError,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderProviderContext() {
  const context = useContext(HeaderContext);

  if (context === null) {
    throw new Error(
      "useHeaderProviderContext must be used within a HeaderProvider"
    );
  }
  return context;
}
