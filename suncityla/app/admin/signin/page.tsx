"use client";
import AlreadySignedIn from '@/components/AdminForm/AlreadySignedIn';
import SignInForm from "@/components/AdminForm/SignInForm";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function AdminsSignInPage () {
    const { data: session } = useSession();
    if (session) {
        return <AlreadySignedIn onRedirect={() => redirect("/admin")} />;
    }
    return (
        <div className="flex flex-col justify-center items-center mt-6">
            <h1 className="text-2xl font-semibold">Admin Sign In</h1>
            <SignInForm />
        </div>
    )
}