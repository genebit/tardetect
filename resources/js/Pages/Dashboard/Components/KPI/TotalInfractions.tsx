import { Card, CardContent } from "@/components/ui/card";
import { Book, GraduationCap } from "lucide-react";

export default function TotalInfractions() {
  return (
    <Card className="shadow-none">
      <CardContent className="flex flex-row gap-3 p-4">
        <span className="flex items-center justify-center h-12 rounded-lg min-w-12 bg-blue-50">
          <Book className="text-blue-500" />
        </span>
        <section className="w-full">
          <span className="font-semibold">Total Infractions</span>
          <div className="w-max ms-auto">
            <span className="text-6xl font-black text-blue-700 opacity-25">
              {43}
            </span>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
