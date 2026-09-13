"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const QuoteFormContext = createContext<
  | {
      isOpen: boolean;
      open: () => void;
      close: () => void;
    }
  | undefined
>(undefined);

export function QuoteFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuoteFormContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </QuoteFormContext.Provider>
  );
}

export function useQuoteForm() {
  const ctx = useContext(QuoteFormContext);
  if (!ctx)
    throw new Error("useQuoteForm must be used inside QuoteFormProvider");
  return ctx;
}
