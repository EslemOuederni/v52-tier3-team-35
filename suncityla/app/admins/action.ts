import prisma from "@/prisma/prismaClient";

// Needed to prevent next.js from caching data
export const dynamic = "force-dynamic";

const getAdmins = async () => {
  return await prisma.admin.findMany();
};

export default getAdmins;
