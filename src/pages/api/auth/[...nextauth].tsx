import NextAuth from 'next-auth';

import CredentialsProvider from "next-auth/providers/credentials";

import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mondodb";
import connectDB from '@/lib/index';
import Users, { IUser, User } from '@/lib/models/userModels';
import bcrypt from 'bcrypt';
interface ISignInUser {
  password: string;
  user: IUser;
}
// import jwt from "jsonwebtoken";
connectDB();
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
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials?.email || "";
        const password = credentials?.password || "";
        const user = await Users.findOne<IUser>({ email });
        if (!user) {
          throw new Error("You haven't registered yet");
        }
        if (password && password.trim()!=="" || !password) {
          throw new Error("password must not be empty");
        }
        return signInUser({ password, user })
      }
    })
  ],
  theme: {
    colorScheme: "dark",
  },
  session: {
    strategy: "database",
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
        secure: true
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      return session || {};
    },
    async jwt(token) {
      token.token["userRole"] = "admin";
      return token;
    },
  },
  pages:{
    signIn:"/auth/login"
  }
})


const signInUser = async ({ password, user }:ISignInUser) => {
  if (!user.password) {
    throw new Error("Please enter password");
  }
  const hash = await bcrypt.hash(user.password, process.env.NEXTAUTH_SECRET);
  const isMatch = await bcrypt.compare(password, hash);
  if (!isMatch) {
    throw new Error("Password not correct");
  }
  return user;
}