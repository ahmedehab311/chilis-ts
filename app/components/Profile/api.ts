import api from "@/lib/axios";
import { accountSchemaType } from "@/schemas/profile/accountSchema";

interface TUpdateProfile {
    data: accountSchemaType;
 
}

export const updateProfile = ({ data }: TUpdateProfile) => {
    return api.post("/profile/update", null, {
        params: {
            name: data.name,
            phone: data.phone,
            email: data.email,
        },
    });
};