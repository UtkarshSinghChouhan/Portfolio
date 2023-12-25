"use client";
import {
  ActiveSectionContextProviderProps,
  ActiveSectionContextType,
  SectionName,
} from "@/lib/types";
import {
  useState,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useContext,
} from "react";

const activeSectionContextObject =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  const [timeOfLastClicked, setTimeOfLastClicked] = useState(0); // we need to keep track of the intersection-observer api in order to disable the observer temporarily when the user clicks on the link.

  return (
    <activeSectionContextObject.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClicked,
        setTimeOfLastClicked,
      }}
    >
      {children}
    </activeSectionContextObject.Provider>
  );
};

// Custom hook for consuming the active-section-context
export function useActiveSectionContext() {
  const context = useContext(activeSectionContextObject);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}

export default ActiveSectionContextProvider;
