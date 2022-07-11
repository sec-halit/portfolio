declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    EMAIL_FROM:string
    EMAIL_SERVER:string
    MONGODB_URI:string
  }
}
