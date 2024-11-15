import prisma from "@/prisma/prismaClient";

export const dynamic = "force-dynamic";

export default async function AdminsPage() {
  const admins = await prisma.admin.findMany();

  return (
    <div>
      <h1>Admins</h1>
      {JSON.stringify(admins, null, 2)}
    </div>
  );
}
