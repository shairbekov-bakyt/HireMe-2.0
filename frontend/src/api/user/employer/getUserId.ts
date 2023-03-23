import { create, SetState } from 'zustand';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { URL } from '@/api/key';

interface UserStore {
    data: any;
    isLoading: boolean;
    isError: boolean;
    getUserById: () => Promise<void>;
}


export const useUserGetId = create<UserStore>((set) => ({
    data: [],
    isLoading: true,
    isError: false,
    getUserById: async () => {
        const userId = Cookies.get('id')
        try {
            const response: AxiosResponse<any> = await axios.get(`${URL}users/${userId}/`);
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