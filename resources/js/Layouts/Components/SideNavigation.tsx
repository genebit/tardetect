import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/types";
import { Link } from "@inertiajs/react";
import { Book, Info, LogOut, Timer } from "lucide-react";

export default function SideNavigation({ user }: { user: User }) {
  return (
    <aside className="flex flex-col w-1/4 min-h-screen gap-3 p-12 bg-slate-100">
      <section>
        <div className="flex gap-3 mb-3">
          <img
            className="z-30 object-cover w-10 h-10 pointer-events-none"
            src="/assets/imgs/tardetect-logo.png"
            alt="Tardetect Logo"
          />
          <span className="self-center text-lg font-black tracking-wider uppercase">
            TarDetect
          </span>
        </div>
      </section>
      <section>
        <Card className="border-none shadow-xl overflow-clip rounded-2xl bg-gradient-to-t from-green-950 to-primary">
          <CardContent className="flex p-4">
            <img
              className="z-30 object-cover w-20 h-20 rounded-full pointer-events-none"
              src="/assets/svgs/avatar.svg"
              alt="Tardetect Logo"
            />
            <div className="mx-3 border border-solid border-green-950 opacity-20"></div>
            <section className="flex flex-col gap-1">
              <div className="flex items-center justify-center w-8 h-8 text-green-700 rounded-lg bg-emerald-50">
                <Book size={16} />
              </div>
              <h6 className="text-xs text-white uppercase opacity-65">
                {user.person.role.role_name}
              </h6>
              <h2 className="mb-0 text-xl font-bold text-white">
                {user.person.last_name}, {user.person.first_name}
              </h2>
              <span className="max-w-xs px-2 py-1 text-xs text-white truncate bg-green-900 rounded-md overflow-ellipsis badge content-sm">
                {/* TODO: For students, show their student ID instead. */}
                {user.email}
              </span>
            </section>
          </CardContent>
        </Card>
      </section>
      <section>
        <label htmlFor="">Management</label>
        <nav className="flex flex-col mt-2 space-y-1">
          <Link
            href={route("dashboard")}
            className="flex items-center justify-between w-full px-3 py-2 text-base transition-colors border rounded-md border-primary text-primary hover:bg-primary hover:text-white"
          >
            SHS Student Attendances
            <Timer size={16} />
          </Link>
          <Link
            href={route("dashboard")}
            className="flex items-center justify-between w-full px-3 py-2 text-base transition-colors border rounded-md border-primary text-primary hover:bg-primary hover:text-white"
          >
            Violations
            <Info size={16} />
          </Link>
        </nav>
      </section>
      <section>
        <label htmlFor="">Account</label>
        <nav className="flex flex-col mt-2 space-y-1">
          <Link
            href={route("api.auth.logout")}
            method="post"
            as="button"
            className="flex items-center justify-between w-full px-3 py-2 text-base transition-colors border rounded-md border-primary text-primary hover:bg-primary hover:text-white"
          >
            Logout
            <LogOut size={16} />
          </Link>
        </nav>
      </section>
    </aside>
  );
}
