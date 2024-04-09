import { useActiveSectionContext } from "@/context/ActiveSection";
import { useEffect, useRef, useState } from "react";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const [inView, setInView] = useState(false); 
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const ref = useRef(null);

  const onIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
      setInView(entry.isIntersecting);
    });
  };

  const options = {
    threshold: threshold
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return {
    ref,
    inView
  };
}
