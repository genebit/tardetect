import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import KPIs from "./Components/KPI/KPIs";

export default function Dashboard({ auth }: PageProps) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />
      <header className="flex flex-col gap-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Card className="relative shadow-none overflow-clip">
          <CardContent className="flex flex-col gap-3 p-4">
            <h1 className="z-10 text-2xl font-black">
              SHS Student Attendance Logs
            </h1>
            <KPIs className="z-10" />
            <img
              className="absolute z-0 opacity-50 -right-12 w-96"
              src="/assets/svgs/illust-card.svg"
              alt="Illustration Card"
            />
          </CardContent>
        </Card>
      </header>
    </AuthenticatedLayout>
  );
}
