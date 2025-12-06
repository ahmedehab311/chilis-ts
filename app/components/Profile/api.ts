import { api } from "@/api/axios";

export const updateProfile = (data: {
    name: string;
    email: string;
    phone: string;
}) => {
    return api.post("/profile/update", data);
};