import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import KioskLayout from "@/Layouts/KioskLayout";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Kiosk() {
  const [currentTime, setCurrentTime] = useState("");
  const [isInitialSync, setIsInitialSync] = useState(false);
  const SERVER_POLLING_TIME = 5 * 60 * 1000; // 5 minutes
  const CLIENT_POLLING_TIME = 1000; // 1 second

  // Memoize the time formatting function
  const formatTime = useCallback((timeString: string) => {
    const [hh = "0", mm = "00", ss = "00"] = timeString.split(":");
    const hour24 = parseInt(hh, 10);
    if (Number.isNaN(hour24)) return timeString;

    const ampm = hour24 >= 12 ? "PM" : "AM";
    const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
    return `${hour12}:${mm.padStart(2, "0")}:${ss.padStart(2, "0")} ${ampm}`;
  }, []);

  const fetchDateTime = useCallback(async () => {
    try {
      const { data: serverResponse } = await axios.get(
        route("api.kiosk.datetime")
      );

      // Assuming your backend sends the current 24-hour time string
      const serverTime = serverResponse.data.info.current_time;

      // Set the authoritative server time
      setCurrentTime(serverTime);

      if (!isInitialSync) {
        setIsInitialSync(true);
      }
    } catch (error) {
      console.error("Failed to sync with server time:", error);
    }
  }, [isInitialSync]);

  useEffect(() => {
    // Start the initial server sync
    fetchDateTime();

    // Server Polling Timer (resync every 5 minutes)
    const serverTimer = setInterval(fetchDateTime, SERVER_POLLING_TIME);

    const clientTimer = setInterval(() => {
      if (isInitialSync) {
        // Get the current local time and update the state
        const now = new Date();
        const hh = now.getHours().toString().padStart(2, "0");
        const mm = now.getMinutes().toString().padStart(2, "0");
        const ss = now.getSeconds().toString().padStart(2, "0");

        // IMPORTANT: This relies on the client's clock.
        setCurrentTime(`${hh}:${mm}:${ss}`);
      }
    }, CLIENT_POLLING_TIME);

    return () => {
      clearInterval(serverTimer);
      clearInterval(clientTimer);
    };
  }, [fetchDateTime, isInitialSync]);

  return (
    <KioskLayout>
      <Head title="Kiosk" />
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
        <h1
          id="time"
          className="z-20 text-6xl font-black text-center text-transparent lg:text-8xl 2xl:text-9xl tabular-nums bg-clip-text bg-gradient-to-br from-emerald-700 to-emerald-800"
        >
          {formatTime(currentTime)}
        </h1>
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
