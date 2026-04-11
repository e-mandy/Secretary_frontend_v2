import { useNavigate } from "react-router-dom"
import { DataTable } from "../../../components/data-table"
import { columns } from "../datas/columns"

const Professors = () => {
    const professors: any = [
        {
            id: "1",
            email: "jonhdoe@gmail.com",
            lastname: "DOE",
            firstname: "John"
        },
        {
            id: "2",
            email: "jacques@gmail.com",
            lastname: "DOE",
            firstname: "Jacques"
        }
    ]

    const navigate = useNavigate();
  return (
    <div className="w-full h-full">
        <div className="flex justify-between">
            <div>
                <h1 className="text-3xl mb-2 font-bold">Professeurs</h1>
                <p className="">Ayez le contrôle sur l'ensemble des professeurs du système.</p>
            </div>
            <div>
                <button 
                    className="px-4 py-2 bg-primary text-white rounded-xl text-lg cursor-pointer"
                    onClick={() => navigate("/secretary/professor/create")}
                >
                    Ajouter un professeur
                </button>
            </div>
        </div>
        <div className="py-10">
            <DataTable columns={columns} data={professors} />
        </div>
    </div>
  )
}

export default Professors
