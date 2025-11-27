import { cn } from "@/lib/utils";
import ClassSchedule from "./ClassSchedule";
import MissingAttendance from "./MissingAttendance";
import TotalInfractions from "./TotalInfractions";
import { HTMLAttributes } from "react";

export default function KPIs({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  const compCn = cn("flex flex-col gap-3 lg:flex-row *:basis-full", className);

  return (
    <div className={compCn} {...props}>
      <ClassSchedule />
      <MissingAttendance />
      <TotalInfractions />
    </div>
  );
}
