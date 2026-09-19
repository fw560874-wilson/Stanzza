import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type UiContextValue = {
  menuOpen: boolean;
  inquiryOpen: boolean;
  searchOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setInquiryOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
};

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const value = useMemo(
    () => ({
      menuOpen,
      inquiryOpen,
      searchOpen,
      setMenuOpen,
      setInquiryOpen,
      setSearchOpen,
    }),
    [menuOpen, inquiryOpen, searchOpen],
  );
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used inside UiProvider");
  return ctx;
}
