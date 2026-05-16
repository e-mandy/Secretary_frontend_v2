import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { BadgePlus, Mail, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import show from "../api/show.api";
import { useEffect } from "react";
import type { ProfessorType } from "../schemas/professor.schema";
import ProfessorDocuments from "./ProfessorDocuments";
import Spinner from "@/components/Spinner";

const ProfessorView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) navigate("/", { replace: true });
  }, [id, navigate]);

  const { data, isPending } = useQuery<ProfessorType>({
    queryKey: ["professor"],
    queryFn: () => {
      if (!id) throw new Error("Id du professeur manquant");
      return show(id);
    },
    enabled: !!id,
  });

  if (!id) {
    navigate(-1);
  }
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/3 p-4 flex flex-col gap-8">
        <div className="prof-card bg-white shadow-lg flex flex-col items-center w-full rounded-lg py-8 px-6">
          <div className="rounded-full bg-blue-300 w-fit h-fit p-4 my-2">
            <User size={40} />
          </div>
          <div className="my-2 text-center">
            {isPending ? (
              <Spinner height="20" width="20" color="black" visible />
            ) : (
              <h3 className="text-xl mb-2">
                {data?.lastname} {data?.firstname}
              </h3>
            )}
            <p className="text-sm">(Profession - À venir)</p>
          </div>
          <div className="my-2 mx-auto px-4">
            {data?.matters.map((matter) => (
              <Badge className="bg-blue-950 text-blue-300 mx-1 my-1">
                <BadgePlus /> {matter.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-white shadow-lg flex flex-col items-start w-full rounded-lg p-6">
          <h2 className="uppercase text-gray-500 my-3 font-extrabold">
            Contacts
          </h2>
          <div className="flex items-center gap-4 my-3">
            <div className="w-fit h-fit p-2 rounded-full bg-blue-200">
              <Mail size={20} />
            </div>
            <div className="flex flex-col items-start">
              <h5 className="text-sm font-bold text-gray-500">Email address</h5>
              <p className="font-semibold">{data?.email}</p>
            </div>
          </div>
        </div>
      </div>
      <ProfessorDocuments />
    </div>
  );
};

export default ProfessorView;
