import { useState } from "react";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import img from "@/public/images/download (1).svg"
// import { ReactComponent as AvatarSvg } from "../../profile/download (1).svg";
import { useAuth } from "@/providers/authProvider";
import Image from "next/image";
export default function ProfileCard() {
    const { user } = useAuth();
    return (
        <Card>
            <CardContent className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center gap-6 ">
                    <div>   <Image
                        width={100}
                        height={100}
                        src={img}
                        alt="user-profile"
                        className="mt-2 "
                    /></div>
                    {/* Name */}
                    <div>
                        <h2 className="text-lg font-semibold">{user?.user_name}</h2>

                        {/* Email */}
                        <p className="text-sm text-muted-foreground">
                            {user?.email}
                        </p>
                    </div>
                </div>

                <Separator />

                {/* Addresses */}
                <div className="w-full text-left space-y-2">
                    <h3 className="font-medium">Addresses</h3>
                    <Button
                        variant="outline"
                        className="w-full "
                    // onClick={() => setOpen(true)}
                    >
                        Add or remove a delivery address
                    </Button>
                </div>
            </CardContent>
        </Card>


    )
}
