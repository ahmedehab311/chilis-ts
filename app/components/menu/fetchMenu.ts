// import axios from "axios";
import { APIURLMenu } from "@/api/services";
export async function fetchMenu() {
    const res = await fetch(`${APIURLMenu}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
    });
    const sections = res?.data?.data.menu[0].sections || [];
    if (!res.ok) {
        throw new Error("Failed to fetch menu");
    }

    return sections;
}


// export const fetchData = async () => {
//     try {
//         const response = await axios.get(APIURL);
//         const sections = response.data.data.menu[0].sections || [];

//         return sections;
//     } catch (error) {
//         console.error("Error fetching data: ", error);
//         throw error;
//     }
// };