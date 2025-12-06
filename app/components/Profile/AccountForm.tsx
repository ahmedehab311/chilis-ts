import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AccountForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>My Account</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                <div>
                    <Label>Name</Label>
                    <Input placeholder="Name" />
                </div>

                <div>
                    <Label>Phone</Label>
                    <Input placeholder="Phone" />
                </div>

                <div>
                    <Label>Email Address</Label>
                    <Input placeholder="Email" />
                </div>

                <Button className="w-full">Save changes</Button>
            </CardContent>
        </Card>

    )
}
