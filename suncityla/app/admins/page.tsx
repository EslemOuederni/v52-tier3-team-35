import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminsPage() {
  const session = await getServerSession(authOptions);
  if(!session || !session.user){
        redirect("/admins/signin");
    }
  return (
    <div>
      <h1>Admins Dashboard</h1>
      <h2>Welcome back {session.user.username}</h2>
    </div>
  );
}
