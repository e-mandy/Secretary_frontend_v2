import { create } from "zustand";
import type { ProfessorType } from "../schemas/professor.schema";

type ProfessorCreateStore = {
    professor: Partial<ProfessorType>;
    setProf: (professor: Partial<ProfessorType>) => void
}

export const useProfessorCreateStore = create<ProfessorCreateStore>((set) =>({
    professor: {},
    setProf: (data) => set({ professor: data }) 
}))