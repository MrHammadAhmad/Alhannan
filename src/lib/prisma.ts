import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

if (process.env.DATABASE_URL && process.env.DATABASE_URL.includes("PaKis#09871")) {
  process.env.DATABASE_URL = process.env.DATABASE_URL.replace("PaKis#09871", "PaKis%2309871");
} else if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "postgresql://postgres.vtjhcohylmmcffquuoyz:PaKis%2309871@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true";
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
