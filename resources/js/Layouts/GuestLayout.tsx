import { Toaster } from "@/components/ui/sonner";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full m-0 bg-neutral-50 dark:bg-slate-950">
      <main className="z-20 flex flex-col w-full min-h-screen">{children}</main>
      <Toaster position="bottom-right" />
      <header className="absolute top-0 z-10 mt-16 text-center -translate-x-16 left-1/2">
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
        className="absolute top-0 z-0 h-screen opacity-75 pointer-events-none filter blur-md"
        src="/assets/imgs/login-backg.png"
        alt="Background"
      />
      <img
        className="absolute bottom-0 z-10 max-w-md translate-x-1/2 opacity-75 pointer-events-none right-1/3 xl:max-w-lg"
        src="/assets/svgs/illust-login.svg"
        alt="Background"
      />
      <img
        className="absolute z-20 pointer-events-none max-w-14 bottom-4 left-4"
        src="/assets/svgs/genebit-logo.svg"
        alt="Background"
      />
    </div>
  );
}
