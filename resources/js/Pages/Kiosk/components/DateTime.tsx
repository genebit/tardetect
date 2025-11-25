import axios from "axios";
import { useState, useCallback, useEffect } from "react";

export default function DateTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [isInitialSync, setIsInitialSync] = useState(false);
  const SERVER_POLLING_TIME = 5 * 60 * 1000; // 5 minutes
  const CLIENT_POLLING_TIME = 1000; // 1 second

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

      const serverTime = serverResponse.data.info.current_time;

      setCurrentTime(serverTime);

      if (!isInitialSync) {
        setIsInitialSync(true);
      }
    } catch (error) {
      console.error("Failed to sync with server time:", error);
    }
  }, [isInitialSync]);

  useEffect(() => {
    fetchDateTime();

    const serverTimer = setInterval(fetchDateTime, SERVER_POLLING_TIME);

    const clientTimer = setInterval(() => {
      if (isInitialSync) {
        // Get the current local time and update the state
        const now = new Date();
        const hh = now.getHours().toString().padStart(2, "0");
        const mm = now.getMinutes().toString().padStart(2, "0");
        const ss = now.getSeconds().toString().padStart(2, "0");

        setCurrentTime(`${hh}:${mm}:${ss}`);
      }
    }, CLIENT_POLLING_TIME);

    return () => {
      clearInterval(serverTimer);
      clearInterval(clientTimer);
    };
  }, [fetchDateTime, isInitialSync]);

  return (
    <h1
      id="time"
      className="z-20 text-6xl font-black text-center text-transparent lg:text-8xl 2xl:text-9xl tabular-nums bg-clip-text bg-gradient-to-br from-green-700 to-emerald-900"
    >
      {formatTime(currentTime)}
    </h1>
  );
}
