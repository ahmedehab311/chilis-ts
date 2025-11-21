// import axios from "axios";
import { APIURLMenu } from "@/api/services";
export async function fetchMenu() {
    const res = await fetch(`${APIURLMenu}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch menu");
    }

    return res.json();
}
