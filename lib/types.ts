import { Dispatch, ReactNode, SetStateAction } from "react";
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProviderProps = {
  children: ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClicked: number;
  setTimeOfLastClicked: Dispatch<SetStateAction<number>>;
};
