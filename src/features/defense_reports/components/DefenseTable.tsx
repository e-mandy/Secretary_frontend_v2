import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { useDefense } from "../api/useDefense";

const DefenseTable = () => {
  const {
    fetchAllDefense: { data },
  } = useDefense();
  return (
    <div className="mt-10">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
};

export default DefenseTable;
