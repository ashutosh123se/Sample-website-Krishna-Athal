"use client";
import { useEffect } from "react";

const SELECTORS = [
  ".fade-up:not(.visible)",
  ".scale-reveal:not(.visible)",
  ".reveal-line:not(.visible)",
  ".fade-in:not(.visible)",
  ".slide-right:not(.visible)",
  ".slide-left:not(.visible)",
  ".slide-up:not(.visible)",
  ".bounce-in:not(.visible)",
  ".blur-in:not(.visible)",
  ".wipe-left:not(.visible)",
  ".wipe-right:not(.visible)",
  ".gold-rule:not(.visible)",
].join(", ");

export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(SELECTORS).forEach((el) => {
        observer.observe(el);
      });
    };

    // Initial scan
    observe();

    // Re-scan after short delay to catch hydrated/dynamic elements
    const t1 = setTimeout(observe, 100);
    const t2 = setTimeout(observe, 500);

    // Watch for dynamically added elements
    const mutationObserver = new MutationObserver(observe);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
