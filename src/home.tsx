import { lazy, Suspense } from "react";
import { useEffect, useState, useRef } from 'react';

const sectionsConfig =[
    {id: 'about', Component: lazy(() => import("./components/sections/AboutSection"))},
    {id: 'experience', Component: lazy(() => import("./components/sections/ExperienceSection"))},
    {id: 'projects', Component: lazy(() => import("./components/sections/ProjectsSection"))},
    {id: 'contact', Component: lazy(() => import("./components/sections/ContactSection"))},
    {id: 'footer', Component: lazy(() => import("./components/layout/Footer"))}
]


function useIntersectionObserver(options={}){
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null)
    useEffect(()=>{
        const currentRef = ref.current;
        if(!currentRef)return;
        
        const observer = new IntersectionObserver(([entry])=>{
            setIsIntersecting(entry.isIntersecting);
            console.log(entry.target)
        },options)

        observer.observe(currentRef);

        return()=>{
            observer.unobserve(currentRef);
        }

    }, [options, ref])
   
      return [ref, isIntersecting];

}
export function SectionWrapper({ Component }: {Component: React.ComponentType}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });
  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transition: '2s ease-in-out' }}>
      <Component />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {sectionsConfig.map(({ id, Component }) => (
        <SectionWrapper key={id} Component={Component} />
      ))}
    </Suspense>
  );
}
