"use client";
import { useEffect, useRef } from "react";
import styles from "./PageLoader.module.css";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const hide = () => {
      loader.classList.add(styles.loaded);
    };

    if (document.readyState === "complete") {
      setTimeout(hide, 600);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 600));
    }
  }, []);

  return (
    <div ref={loaderRef} className={styles.loader}>
      <p className={styles.loaderLogo}>Dr. Krishna Athal</p>
    </div>
  );
}
