export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TeacherClassesClient } from "./TeacherClassesClient";

export default async function TeacherClassesPage() {
  const session = await getServerSession(authOptions);
  
  const teacher = await prisma.teacherProfile.findUnique({
    where: { userId: session?.user?.id },
    include: {
      batches: {
        include: {
          course: true,
          _count: { select: { registrations: true } }
        }
      }
    }
  });

  return <TeacherClassesClient batches={teacher?.batches || []} />;
}
