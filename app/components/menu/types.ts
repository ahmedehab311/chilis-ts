export interface Item {
    id: number;
    name_en: string;
    name_ar: string;
    description_en: string;
    description_ar: string;
    price: number;
    image: string;
}
export interface Section {
    id: number;
    name_en: string;
    name_ar: string;
    description_en: string;
    description_ar: string;
    price: number;
    image: string;
    items: Item[]
}