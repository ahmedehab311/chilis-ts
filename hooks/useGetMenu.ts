import { APIURLMenu } from "@/api/services";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { Section } from "@/app/components/menu/types";

export const fetchMenu = async (): Promise<Section[]> => {
    const response = await axios.get(APIURLMenu);
    const sections = response.data.data.menu[0].sections || [];
    return sections;
};

export const useGetMenu = (): UseQueryResult<Section[]> => {
    const query = useQuery({ queryKey: ["menu"], queryFn: fetchMenu, staleTime: 1000 * 10 })
    return query
}