'use client'
import { AccountForm, ProfileCard } from "../components/Profile";

export default function Profile() {
    return (
        <div className="m-4 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="md:col-span-1">
                <ProfileCard />
            </div>

            <div className="md:col-span-2">
                <AccountForm />
            </div>
        </div>
    )
}
