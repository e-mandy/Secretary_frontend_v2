import { useMutation } from "@tanstack/react-query";
import { axiosPrivateInstance } from "../../../api/axiosInstance";
import type { ProfessorType } from "../schemas/professor.schema";
import { useState } from "react";

const create = async(professor: ProfessorType) => {
    const response = await axiosPrivateInstance.post("secretary/professor/create", professor);
    return response.data;
}

export const useProfessorCreate = () => {
    const [error, setError] = useState<null | Error>(null);

    const createProf = useMutation({
        mutationFn: create,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (data) => {
            setError(data)
        }
    });

    return { createProf, error };
}