import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { SectionName } from "./types";

export function useSectionInView(thresHold: number, sectionName: SectionName) {
  const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: thresHold,
  });

  useEffect(() => {
    inView &&
      Date.now() - timeOfLastClicked > 1000 &&
      setActiveSection(sectionName);
  }, [inView, timeOfLastClicked]);

  return { ref, inView };
}
