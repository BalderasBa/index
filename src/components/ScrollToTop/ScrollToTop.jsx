/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <div
      className="
        fixed bottom-8 right-16 z-[1001] 
        p-1.5 rounded-full 
        bg-[var(--clr-bg-head)] text-[var(--clr-fg-alt)] 
        border border-[var(--clr-fg-alt)] 
        transition duration-200 
        hover:bg-[var(--clr-primary)] 
        animate-bouncing
      "
    >
      <a
        href="#"
        className="transition duration-200 hover:text-[var(--clr-bg)]"
        aria-label="Scroll to top"
      >
        ↑
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
