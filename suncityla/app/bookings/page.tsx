import prisma from "@/prisma/prismaClient";

export const dynamic = "force-dynamic";

export default async function AdminsPage() {
  const bookings = await prisma.booking.findMany();

  return (
    <div>
      <h1>Bookings</h1>
      {JSON.stringify(bookings, null, 2)}
    </div>
  );
}
