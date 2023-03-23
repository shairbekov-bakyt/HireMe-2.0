import create from "zustand";
import { URL } from "../key";
import Cookies from "js-cookie";

const signUserInUrl = `${URL}users/sign_in/`;

interface AuthState  {
  token: string | null;
  user_id: string | null;
  login: (email: string, password: string) => Promise<void>;
  // register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
  clearError: () => void;
}



export const useAuthStore = create<AuthState>((set):any => {

  return{
    token: Cookies.get("token") || null,
    user_id: Cookies.get("id") || null,
    error: null,
    login: async (email: string, password: string) => {
      try {
        const response = await fetch(signUserInUrl, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Неправильный логин или пароль.");
        }

        const { token, user_id } = await response.json();
        Cookies.set("token", token);
        Cookies.set("id", user_id);
        set({ error: null});
        return response
      } catch (err) {
        set({ error: err.message });
      }
    },
    clearError: () => {
      set({ error: null });
    },
    
    // register: async (email, password) => {
    //   // вызов API для регистрации пользователя и получение токена и id
    //   const response = await fetch("/api/register", {
    //     method: "POST",
    //     body: JSON.stringify({ email, password }),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   const data = await response.json();
    //   // сохранение токена и id в cookie
    //   cookie.set("token", data.token, { expires: 7 });
    //   cookie.set("id", data.id, { expires: 7 });
    //   set({ user: data.user, token: data.token });
    // },
    logout: () => {
      // удаление токена и id из cookie
      Cookies.remove("token");
      Cookies.remove("id");
      set({ user_id: null, token: null });
    }
};
});