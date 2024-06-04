"use client";

import { Session } from "next-auth";
import React, { createContext, useContext } from "react";

type SessionProviderProps = {
  children: React.ReactNode;
  session: SessionType | null;
};

export type SessionType = {
  user: {
    email?: string;
    id?: string;
    isAdmin?: boolean;
  };
  expires: Date;
};

type SessionContextType = {
  session: SessionType | null;
};

export const SessionContext = createContext<SessionContextType | null>(null);

export default function SessionProvider({
  session,
  children,
}: SessionProviderProps) {
  console.log(session);
  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSessionContext() {
  const context = useContext(SessionContext);

  if (context === null) {
    throw new Error("useSessionContext must be used within a SessionProvider");
  }
  return context;
}
