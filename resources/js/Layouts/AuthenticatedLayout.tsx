import { useState, PropsWithChildren, ReactNode } from "react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import Preloader from "@/components/ui/preloader";
import React from "react";
import { Globe, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SideNavigation from "./Components/SideNavigation";

export default function Authenticated({
  user,
  children,
}: PropsWithChildren<{ user: User }>) {
  return (
    <React.Fragment>
      <Preloader />
      <div className="flex flex-row min-h-screen">
        <SideNavigation user={user} />
        <main className="w-full">
          <div className="container min-h-[calc(100vh-6.5rem)] p-12 lg:px-32 mx-auto">
            {children}
          </div>
          <footer className="px-10 py-5 bg-blue-50">
            <div className="flex justify-between">
              <section className="flex gap-3">
                <img
                  className="z-30 object-cover w-12 h-12 pointer-events-none"
                  src="/assets/imgs/tardetect-logo.png"
                  alt="Tardetect Logo"
                />
              </section>
              <section className="flex gap-3">
                <div className="flex flex-col">
                  <span>
                    © Copyright 2025 Team TarDetect. All Rights Reserved.
                  </span>
                  <div className="flex items-center justify-end gap-1">
                    <Button size={"icon"} className="rounded-full bg-slate-900">
                      <Globe />
                    </Button>
                    <Button size={"icon"} className="rounded-full bg-slate-900">
                      <Linkedin />
                    </Button>
                    <span>Developed by: </span>
                  </div>
                </div>
                <img
                  className="z-30 pointer-events-none max-w-12"
                  src="/assets/svgs/genebit-logo.svg"
                  alt="Genebit Logo"
                />
              </section>
            </div>
          </footer>
        </main>
      </div>
    </React.Fragment>
  );
}
