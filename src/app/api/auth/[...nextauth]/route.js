import { loginService } from "@/services/auth/login.service";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
  providers: [
    CredentialsProvider({
      async authorize(getUserInfo) {
        const userData = {
          email: getUserInfo?.email,
          password: getUserInfo?.password,
        };
        const userInfo = await loginService(userData);
        return userInfo;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
   pages: {
    signIn: "/login",
  },
};
const handler = nextAuth(authOption);
export { handler as GET, handler as POST };
