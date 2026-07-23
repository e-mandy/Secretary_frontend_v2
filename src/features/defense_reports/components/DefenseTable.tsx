import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
import { useDefense } from "../api/useDefense";
import { useState, type ChangeEvent } from "react";
import type { DefenseReportType } from "../schemas/defense_report.schema";

const DefenseTable = () => {
  const {
    fetchAllDefense: { data },
  } = useDefense();

  const [query, setQuery] = useState("");

  const handleDefenseReportSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim().toLowerCase());
  };

  const filteredDefenseReports = data
    ? query.trim() == ""
      ? data
      : data.filter((d: DefenseReportType) => {
          return d.owner.toLowerCase().includes(query.toLowerCase());
        })
    : [];

  return (
    <div className="mt-10">
      <div>
        <span>Recherche un PV de Soutenance</span>
        <div className="border-2 w-100 py-1 px-3 rounded mb-3">
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Rechercher..."
            onChange={handleDefenseReportSearch}
          />
        </div>
      </div>

      <DataTable columns={columns} data={filteredDefenseReports} />
    </div>
  );
};

export default DefenseTable;
