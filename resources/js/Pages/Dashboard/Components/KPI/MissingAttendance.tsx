import { Card, CardContent } from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";

export default function MissingAttendance() {
  return (
    <Card className="shadow-none">
      <CardContent className="flex flex-row gap-3 p-4">
        <span className="flex items-center justify-center h-12 rounded-lg min-w-12 bg-blue-50">
          <TriangleAlert className="text-blue-500" />
        </span>
        <section className="w-full">
          <span className="font-semibold">Missing Attendance</span>
          <div className="w-max ms-auto">
            <span className="text-6xl font-black text-blue-700 opacity-25">
              {264}
            </span>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
