import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [hidePreloader, setHidePreloader] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setHidePreloader(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div
      className={`animate__animated fixed top-0 left-0 w-screen h-screen overflow-hidden bg-white transition-opacity duration-700 flex items-center justify-center ${
        isLoading
          ? "opacity-100 z-50"
          : !hidePreloader
          ? "animate__fadeOut z-40"
          : "z-0 hidden"
      }`}
    >
      <span className="preloader"></span>
    </div>
  );
}
