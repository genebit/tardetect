import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function ClassSchedule() {
  // NOTE: temporary data, replace with actual data later
  const classScheduleDays = ["MON", "TUE", "WED", "THU", "FRI"];
  const classScheduleTimeIn = "08:00 AM";

  return (
    <Card className="shadow-none">
      <CardContent className="flex flex-row gap-3 p-4">
        <span className="flex items-center justify-center h-12 rounded-lg min-w-12 bg-blue-50">
          <GraduationCap className="text-blue-500" />
        </span>
        <section className="w-full">
          <span className="font-semibold">Class Schedule</span>
          <div className="flex gap-1">
            {Array.from({ length: classScheduleDays.length }).map(
              (_, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded-md badge"
                >
                  {classScheduleDays[index][0]}
                </span>
              )
            )}
          </div>
          <div className="w-max ms-auto">
            <small>{classScheduleTimeIn}</small>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
