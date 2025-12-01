import { BASE_URL_images } from "@/api/setting";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ItemCard({ item }: { item: any }) {
  return (
    <Card className="rounded-xl overflow-hidden shadow hover:scale-105 transition cursor-pointer">
      <Image
        width={200}
        height={200}
        alt="itemImage"
        src={`${BASE_URL_images}${item?.image}`}
        className="w-full h-48 object-cover"
      />

      <CardContent className="p-4 space-y-2">
        <h3 className="font-bold text-lg">{item.name_en}</h3>
        <p className="text-sm text-gray-500">{item.description_en}</p>
      </CardContent>
    </Card>
  );
}
