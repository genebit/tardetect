import { Head } from "@inertiajs/react";
import KioskLayout from "@/Layouts/KioskLayout";
import { Card, CardContent } from "@/components/ui/card";
import DateTime from "./components/DateTime";
import { TriangleAlert, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Kiosk() {
  return (
    <KioskLayout>
      <Head title="Kiosk" />
      <section className="absolute z-40 flex gap-1 top-4 left-4">
        <Button
          className="w-16 h-16 text-red-600 bg-red-100 hover:bg-red-600 hover:text-white rounded-2xl"
          size="icon"
        >
          <TriangleAlert size={28} />
        </Button>
        <Button className="w-16 h-16 bg-slate-900 rounded-2xl" size="icon">
          <Info size={28} />
        </Button>
      </section>
      <header className="flex flex-col gap-5">
        <img
          className="z-20 w-24 mx-auto"
          src="/assets/imgs/ncf-colored.png"
          alt="NCF Seal"
        />
        <section>
          <h2 className="z-20 mb-0 text-3xl font-black tracking-wider text-center uppercase 2xl:text-5xl">
            Project Tardetect
          </h2>
          <p className="z-20 mx-auto text-xl font-bold uppercase w-max text-primary">
            {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </section>
        <DateTime />
        <Card className="z-20 mx-auto bg-white w-max animate-pulse">
          <CardContent className="p-3 px-5">
            <h6 className="mb-0 font-black tracking-wider text-center uppercase md:text-lg 2xl:text-3xl">
              Tap your ID on top of the scanner
            </h6>
          </CardContent>
        </Card>
        <div className="relative mx-auto mt-5 scale-[1.75] w-max z-10">
          <div className="absolute animate-bounce duration-2000 left-5 top-5">
            <img
              src="/assets/svgs/illust-id.svg"
              alt="Employee ID"
              width="150"
            />
          </div>
          <div>
            <img src="/assets/svgs/illust-rfid.svg" alt="RFID" width="150" />
          </div>
        </div>
      </header>
    </KioskLayout>
  );
}
