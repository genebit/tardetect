import { Button } from "@/components/ui/button";
import Preloader from "@/components/ui/preloader";
import { Toaster } from "@/components/ui/sonner";
import Scanner from "@/Pages/Kiosk/components/Scanner";
import { Info, TriangleAlert } from "lucide-react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full m-0 bg-neutral-50">
      <Preloader />
      <Toaster position="top-right" />
      <Scanner />
      <div className="absolute top-0 z-20 w-screen h-screen px-20 py-16">
        <div className="relative w-full h-full py-12 border border-solid shadow-2xl border-neutral-300 rounded-3xl filter backdrop-blur-sm">
          {children}
          <div className="absolute flex flex-col gap-3 bottom-8 left-8">
            <section className="flex items-center gap-3">
              <div className="relative">
                <div className="w-5 h-5 border-8 rounded-full border-emerald-800"></div>
                <div className="absolute -top-0.5 w-6 h-6 rounded-full -left-0.5 bg-emerald-800 bg-opacity-40 animate-ping"></div>
              </div>
              <h6 className="w-max">
                Barcode reader is{" "}
                <span className="p-1 text-sm font-semibold text-white rounded-md badge bg-primary">
                  active
                </span>
              </h6>
            </section>
            <section className="flex items-center gap-3">
              <div className="relative">
                <div className="w-5 h-5 border-8 rounded-full border-emerald-800"></div>
                <div className="absolute -top-0.5 w-6 h-6 rounded-full -left-0.5 bg-emerald-800 bg-opacity-40 animate-ping"></div>
              </div>
              <h6 className="w-max">
                Thermal printer is{" "}
                <span className="p-1 text-sm font-semibold text-white rounded-md badge bg-primary">
                  active
                </span>
              </h6>
            </section>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 z-0 object-cover w-screen h-screen opacity-75 pointer-events-none filter blur-md"
        src="/assets/imgs/login-backg.png"
        alt="Background"
      />
      <img
        className="absolute z-30 pointer-events-none max-w-14 bottom-4 left-4"
        src="/assets/svgs/genebit-logo.svg"
        alt="Genebit Logo"
      />
      <div className="absolute bottom-4 left-4">
        <div className="w-6 h-6 rounded-full bg-emerald-800"></div>
      </div>
    </div>
  );
}
