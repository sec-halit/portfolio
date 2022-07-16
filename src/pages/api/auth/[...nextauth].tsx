import NextAuth from 'next-auth';


import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mondodb";
import connectDB from '@/lib/index';
import Users from '@/lib/models/userModels';

import  { SignInUser } from '@/lib/services/index'


(async ()=>await connectDB())()
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials?.email || "";
        const password = credentials?.password || "";
        const user = await Users.findOne({ email:email });
        if (!user) {
          throw new Error("You haven't registered yet");
        }
        if (!password) {
          throw new Error("password must not be empty");
        }
        return SignInUser({ password, user })
      },
      
    })
  ],
  theme: {
    colorScheme: "dark",
  },
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, // 2 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  cookies: {
    sessionToken: {
      name: "auth",
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: false
      },
      
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        return false
        // return '/unauthorized'
      }
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser}){
        return token;
    },
  },
   pages:{
      signIn:"/auth/login"
   },

})

