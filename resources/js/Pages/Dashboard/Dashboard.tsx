import PrivateRoute from "@/Routes/PrivateRoute";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, CardContent } from "@/components/ui/card";

function DashboardContent() {
  return (
    <Card className="shadow-none shadow-slate-200">
      <CardContent className="p-5">
        <header className="flex justify-between mb-3">
          <div>
            <h1 className="mb-2 text-xl font-extrabold">TarDetect</h1>
            <p className="text-base text-muted-foreground">
              Manage your Dashboard by selecting the option icon under each row.
            </p>
          </div>
        </header>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <PrivateRoute>
      <Head title="Dashboard" />
      <AuthenticatedLayout>
        <DashboardContent />
      </AuthenticatedLayout>
    </PrivateRoute>
  );
}
