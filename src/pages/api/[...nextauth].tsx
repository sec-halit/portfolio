// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import IdentityServer4 from "next-auth/providers/identity-server4";
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../lib/mondodb";

export default NextAuth({
  secret: String(process.env.SECRET),
  adapter:MongoDBAdapter(clientPromise),
  providers: [
    // IdentityServer4({
    //   id: "identity-server4",
    //   name: "IdentityServer4",
    //   issuer: process.env.IdentityServer4_Issuer,
    //   clientId: process.env.IdentityServer4_CLIENT_ID,
    //   clientSecret: process.env.IdentityServer4_CLIENT_SECRET
    // }),
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRET),
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      // callbacks: {
      //   async signIn({ account, profile }) {
      //     if (account.provider === "google") {
      //       return profile.email_verified && profile.email.endsWith("@example.com")
      //     }
      //     return true // Do different verification for other providers that don't have `email_verified`
      //   },
      // }
    })
    // // Sign in with passwordless email link
    // EmailProvider({
    //   server: String(process.env.MAIL_SERVER),
    //   from: "<no-reply@example.com>",
    // }),
  ]
})