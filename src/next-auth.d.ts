// import "next-auth/jwt";
import NextAuth from "next-auth";
// // Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

// declare module "next-auth/jwt" {
//   interface JWT {
//     idToken?: string;
//     accessToken?:string;
//     /** The user's role. */
//     userRole?: "admin";
//     accessToken?: string;
//   }
// }

declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
//    */
//   interface Session {
//     user: {
//       address: string;
//     };
//   }
//   interface User {}
//   /**
//    * Usually contains information about the provider being used
//    * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
//    */
//   interface Account {}
//   /** The OAuth profile returned from your provider */
//   interface Profile {}
}
