"use client";
import PleaseLogout from '@/components/AdminForm/PleaseLogout';
import SignUpForm from "@/components/AdminForm/SignUpForm";
import Footer from "@/components/Footer";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export const dynamic = "force-dynamic";

export default function AdminsRegisterPage () {
  const { data: session } = useSession();
  if (session) {
    return <PleaseLogout onRedirect={() => redirect("/admin")} />;
  }
  return (
    <>
      <div className=" flex flex-col justify-center items-center mt-6">
        <h1 className=" text-2xl font-semibold">Admin Registration</h1>
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
}
