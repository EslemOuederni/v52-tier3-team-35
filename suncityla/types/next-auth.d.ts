// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface User {
        username: string | null
    }
    
    interface Session {
        user: {
        /** The user's postal address. */
        username: string
        } & DefaultSession["user"]
        token:{
            username:string
        }
  }
}