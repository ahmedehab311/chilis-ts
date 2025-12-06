import { useState } from "react";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import img from "../../profile/download (1).svg"
export default function ProfileCard() {
    return (
        <Card>
            <CardContent className="flex flex-col items-center text-center gap-4">
                {/* Avatar */}
                <Avatar className="w-24 h-24">
                    <AvatarImage src={img} />
                    <AvatarFallback>AE</AvatarFallback>
                </Avatar>

                {/* Name */}
                <h2 className="text-lg font-semibold">Ahmed</h2>

                {/* Email */}
                <p className="text-sm text-muted-foreground">
                    a.ehab@otherlogic.com
                </p>

                <Separator />

                {/* Addresses */}
                <div className="w-full text-left space-y-2">
                    <h3 className="font-medium">Addresses</h3>
                    <Button
                        variant="outline"
                        className="w-full"
                    // onClick={() => setOpen(true)}
                    >
                        Add or remove a delivery address
                    </Button>
                </div>
            </CardContent>
        </Card>


    )
}
