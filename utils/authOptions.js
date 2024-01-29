import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signOut } from "next-auth/react";
import { BASE_URL } from "./baseUrl";

//cll refresh token
async function refreshTokenHandler(token) {
  const res = await fetch(`${BASE_URL}/user/me`, {
    method: "POST",
    headers: {
      Authorization: `Refresh ${token.refreshToken}`,
    },
  });
  // Check if the response is unauthorized (status code 401)
  if (res.status === 401) {
    await signOut({ redirect: false, callbackUrl: "/login" });
    return null;
  }

  const response = await res.json();
  if (response.status === 200) {
    return {
      ...token,
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      expiresIn: response.expiresIn,
    };
  } else {
    await signOut({ redirect: false, callbackUrl: "/login" });
    return null;
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${BASE_URL}/user/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (user?._id && user?.status === 200) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = user;
      }

      if (new Date().getTime() < token.expiresIn) return token;
      return await refreshTokenHandler(token);
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
