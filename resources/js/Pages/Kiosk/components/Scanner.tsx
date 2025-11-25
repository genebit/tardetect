import { CircleCheck, CircleX } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

const ANIMATION_DURATION = 750;

type AnimationState = "entering" | "leaving" | null;
type ScanType = "success" | "failure";

export default function Scanner() {
  const [animationState, setAnimationState] = useState<AnimationState>(null);
  const [scanType, setScanType] = useState<ScanType>("success");

  const handleScanSimulation = (event: MouseEvent) => {
    if (event.button === 2) {
      event.preventDefault();
    }

    // 1. Prevent overlapping animations
    if (animationState !== null) return;

    // 2. Determine the ScanType based on the mouse button (0=Left, 2=Right)
    const type: ScanType = event.button === 2 ? "failure" : "success";
    setScanType(type);

    // 3. Start the entrance animation
    setAnimationState("entering");

    // 4. Schedule the exit animation and final cleanup
    setTimeout(() => setAnimationState("leaving"), ANIMATION_DURATION);
    setTimeout(() => setAnimationState(null), ANIMATION_DURATION * 2);
  };

  useEffect(() => {
    // Attach event listeners for both left-click (click) and right-click (contextmenu)
    document.addEventListener("click", handleScanSimulation);
    document.addEventListener("contextmenu", handleScanSimulation);

    return () => {
      document.removeEventListener("click", handleScanSimulation);
      document.removeEventListener("contextmenu", handleScanSimulation);
    };
  }, [animationState]);

  const {
    icon: ScanIcon,
    primaryColorClass,
    bgColorClass,
  } = useMemo(() => {
    if (scanType === "failure") {
      return {
        icon: CircleX,
        primaryColorClass: "bg-red-600",
        bgColorClass: "bg-red-800",
      };
    }

    return {
      icon: CircleCheck,
      primaryColorClass: "bg-primary",
      bgColorClass: "bg-green-800",
    };
  }, [scanType]);

  if (animationState === null) return null;

  const animationClass =
    animationState === "entering" ? "animate__fadeIn" : "animate__fadeOut";

  return (
    <div
      id="scanner-overlay"
      className={`fixed top-0 left-0 z-50 w-screen h-screen animate__animated ${animationClass}`}
    >
      <div
        className={`flex items-center justify-center w-full h-full ${bgColorClass} pointer-events-none bg-opacity-40`}
      >
        <div
          className={`absolute z-20 flex items-center justify-center w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full ${primaryColorClass} top-1/2 left-1/2`}
        >
          <ScanIcon className="w-16 h-16 text-white" />
        </div>
        <div
          className={`absolute z-10 flex items-center justify-center w-40 h-40 rounded-full animate-ping ${primaryColorClass}`}
        ></div>
      </div>
    </div>
  );
}
