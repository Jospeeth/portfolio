import { forwardRef } from "react";

/**
 * SectionWrapper
 * A consistent, spacious layout container that replaces the default Tailwind 'container'.
 * It provides a wide max-width (max-w-7xl) and balanced responsive padding
 * to give the content more breathing room on large screens, while remaining tight on mobile.
 */
const SectionWrapper = forwardRef(({ children, className = "", id }, ref) => {
  return (
    <div
      id={id}
      ref={ref}
      className={`w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 ${className}`}
    >
      {children}
    </div>
  );
});

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
