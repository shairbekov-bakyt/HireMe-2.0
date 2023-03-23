import { create } from "zustand"
import { URL } from "../key"
import axios, { AxiosResponse } from 'axios';
import { VacansyId } from "@/interface";

interface ComapniesStore {
    data: any;
    isLoading: boolean;
    isError: boolean;
    getPostById: (id: any) => Promise<void>;
}

export const useStoreCompanyId = create<ComapniesStore>((set) => ({
    data: [],
    isLoading: true,
    isError: false,
    getPostById: async (id: any) => {
        try {
            const response: AxiosResponse<any> = await axios.get(`${URL}companies/${id}`);
            set({
                data: response.data,
                isLoading: false,
                isError: false,
            });
        } catch (error) {
            set({
                isLoading: false,
                isError: true,
            });
        }
    }
}));