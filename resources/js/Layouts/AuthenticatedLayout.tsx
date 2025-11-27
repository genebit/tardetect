import { useState, PropsWithChildren, ReactNode } from "react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import Preloader from "@/components/ui/preloader";
import React from "react";

export default function Authenticated({
  user,
  children,
}: PropsWithChildren<{ user: User }>) {
  return (
    <React.Fragment>
      <Preloader />
      <div className="flex flex-row min-h-screen">
        <aside className="w-1/4 min-h-screen p-12 bg-gray-100"></aside>
        <main className="w-full p-12">
          <div className="container">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
}
