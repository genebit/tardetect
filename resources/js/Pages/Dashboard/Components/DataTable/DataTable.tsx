import { columns, Payment } from "./Columns";
import { DataTable } from "./Table";
import { useEffect, useState } from "react";
// Assuming you moved the getData function into this file or imported it

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  // In a real app, you would use axios/fetch here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "a1b2c3d4",
      amount: 450,
      status: "success",
      email: "jane@doe.com",
    },
    // ...
  ];
}

// 💡 This must be a synchronous function component.
export default function DT() {
  const [data, setData] = useState<Payment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 💡 Use useEffect to handle the asynchronous data fetching
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []); // Run only once on mount

  if (isLoading) {
    // 💡 Conditional Rendering: Show a loading state
    return (
      <div className="p-4 text-sm text-center text-slate-500">
        Loading attendance data...
      </div>
    );
  }

  return <DataTable columns={columns} data={data} />;
}
