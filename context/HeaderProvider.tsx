"use client";

import React, { createContext, useContext, useState } from "react";

type HeaderContextProviderProps = {
  children: React.ReactNode;
};

type HeaderContextType = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  settings: boolean;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  activeSetting: string;
  setActiveSetting: React.Dispatch<React.SetStateAction<string>>;
  settingClicked: boolean;
  setSettingClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);

export default function HeaderProvider({
  children,
}: HeaderContextProviderProps) {
  const [menu, setMenu] = useState(false);
  const [settings, setSettings] = useState(false);
  const [settingClicked, setSettingClicked] = useState(false);
  const [activeSetting, setActiveSetting] = useState("");

  return (
    <HeaderContext.Provider
      value={{
        menu,
        setMenu,
        setSettings,
        settings,
        activeSetting,
        setActiveSetting,
        setSettingClicked,
        settingClicked,
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
