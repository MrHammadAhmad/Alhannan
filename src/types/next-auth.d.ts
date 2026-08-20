import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: string;
    emailVerified: Date | null;
  }
  
  interface Session {
    user: User & {
      id: string;
      role: string;
      emailVerified: Date | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    emailVerified: Date | null;
  }
}
