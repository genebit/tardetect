import Preloader from "@/components/ui/preloader";
import { Toaster } from "@/components/ui/sonner";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full m-0 bg-neutral-50">
      <Preloader />
      <main className="z-30 flex flex-col w-full min-h-screen delay-500 animate__animated animate__fadeIn">
        {children}
      </main>
      <Toaster position="top-right" />
      <header className="absolute top-0 z-20 px-16 py-10 mt-16 text-center -translate-x-16 border border-solid rounded-3xl left-1/2 filter backdrop-blur-sm">
        <img
          className="object-cover w-24 h-24 mx-auto mb-8"
          src="/assets/imgs/tardetect-logo.png"
          alt="TarDetect Logo"
        />
        <h1 className="font-black tracking-wide uppercase text-8xl text-primary">
          TarDetect
        </h1>
        <h4 className="text-xl font-medium uppercase">
          Naga College Foundation, Inc.
        </h4>
      </header>
      <img
        className="absolute top-0 z-0 object-cover w-screen h-screen opacity-75 pointer-events-none filter blur-md"
        src="/assets/imgs/login-backg.png"
        alt="Background"
      />
      <img
        className="absolute bottom-0 z-10 max-w-md translate-x-1/2 opacity-75 pointer-events-none right-1/3 xl:max-w-xl"
        src="/assets/svgs/illust-login.svg"
        alt="Login Illustration"
      />
      <img
        className="absolute z-30 pointer-events-none max-w-14 bottom-4 left-4"
        src="/assets/svgs/genebit-logo.svg"
        alt="Genebit Logo"
      />
    </div>
  );
}
