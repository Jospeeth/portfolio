import { lazy, Suspense } from "react";
import { useEffect, useState, useRef } from 'react';

const sectionsConfig =[
    {id: 'navbar', Component: lazy(() => import("./components/layout/NavBar.tsx"))},
    {id: 'hero', Component: lazy(() => import("./components/sections/HeroSection.tsx"))},
    {id: 'about', Component: lazy(() => import("./components/sections/AboutSection.tsx"))},
    {id: 'experience', Component: lazy(() => import("./components/sections/ExperienceSection.tsx"))},
    {id: 'projects', Component: lazy(() => import("./components/sections/ProjectsSection.tsx"))},
    {id: 'contact', Component: lazy(() => import("./components/sections/ContactSection.tsx"))},
]


interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

interface SectionComponentProps {
  sections?: SectionItem[];
  
}

interface SectionItem {
  id: string;
  Component: React.ComponentType<SectionComponentProps>;
}
interface SectionWrapperProps {
  Component: React.ComponentType<SectionComponentProps>;
  sections?: SectionItem[]; 
}

function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;
        
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, {
            threshold: options.threshold,
            rootMargin: options.rootMargin
        });

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, [options.threshold, options.rootMargin]);
   
    return [ref, isIntersecting] as const;
}

export function SectionWrapper({ Component, sections }: SectionWrapperProps) {
  // Setup Intersection Observer to trigger loading 20px before the section is scrolled into view
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.01, rootMargin: "20px" });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);

  useEffect(() => {
    if (isVisible) {
    setIsNavbar(true);

      setHasBeenVisible(true);
    }

  }, [isVisible]);

  return (
    <div ref={ref} className="min-h-[100px]" style={{ opacity: isVisible || isNavbar ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}>
      {hasBeenVisible || isNavbar ? (
        <Suspense fallback={<div className="w-full h-[350px] skeleton rounded-3xl my-8 opacity-20" />}>
          <Component sections={sections}/>
        </Suspense>
      ) : (
        <div className="w-full h-[350px] my-8 opacity-0" />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {sectionsConfig.map(({ id, Component }) => (
        <SectionWrapper key={id} Component={Component} sections={sectionsConfig} />
      ))}
    </>
  );
}
