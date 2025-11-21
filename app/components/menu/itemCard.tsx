import { Card, CardContent } from "@/components/ui/card";

export default function ItemCard({ item }: { item: any }) {
  return (
    <Card className="rounded-xl overflow-hidden shadow hover:scale-105 transition">
      <img
        src={item.image}
        className="w-full h-48 object-cover"
      />

      <CardContent className="p-4 space-y-2">
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
      </CardContent>
    </Card>
  );
}
