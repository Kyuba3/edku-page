import React, { createContext, useContext, useRef, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

interface ScrollContextType {
  scrollToSection: (sectionKey: string) => void;
  sectionRefs: SectionRefs;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize section refs
  const sectionRefs: SectionRefs = {
    contact: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    // Add more sections as needed
  };

  const location = useLocation();

  const scrollToSection = (sectionKey: string) => {
    sectionRefs[sectionKey]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Automatically scroll to section based on URL query parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get('scrollTo');
    if (scrollTo && sectionRefs[scrollTo]) {
      scrollToSection(scrollTo);
    }
  }, [location.search, sectionRefs]);

  return (
    <ScrollContext.Provider value={{ scrollToSection, sectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};