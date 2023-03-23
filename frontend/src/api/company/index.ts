import { create } from "zustand"
import { URL } from "../key"
import axios, { AxiosResponse } from 'axios';

interface ComapniesStore {
    data: any[];
    isLoading: boolean;
    isError: boolean;
    fetchData: () => Promise<void>;
}

export const useStoreCompany = create<ComapniesStore>((set) => ({
    data: [],
    isLoading: true,
    isError: false,
    fetchData: async () => {
        try {
            const response: AxiosResponse<any[]> = await axios.get(`${URL}companies/`);
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
    },
    getPostById: async (id: number) => {
        try {
            const response: AxiosResponse<any[]> = await axios.get(`${URL}jobs/`);
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