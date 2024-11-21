import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const dynamic = "force-dynamic";

export default async function AdminsPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>Admins Page</h1>
      {session ? (
        <div>
          <p>Welcome {session?.user?.username}</p>
        </div>
      ) : (
        <p> You are not signed in</p>
      )}
    </div>
  );
}
