import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/prisma/prismaClient";
import { compare } from "bcrypt";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/admins/signin',
    },
    providers: [
CredentialsProvider({
    name: 'Sign In',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "JohnDoe" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
        if(!credentials?.username || !credentials?.password){
            return null
        }

        const existingAdmin = await prisma.admin.findUnique({
            where: {
                username: credentials?.username
            }
        });

        if(!existingAdmin){
            return null
        }

        const passwordMatch = await compare(credentials.password,existingAdmin.password);

        if(!passwordMatch){
            return null
        }

        return {
            id: existingAdmin.id,
            username: existingAdmin.username
        }
    }
})
],
}