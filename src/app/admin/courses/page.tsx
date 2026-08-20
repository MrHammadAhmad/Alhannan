export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { CoursesClient } from "./CoursesClient";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    include: {
      batches: {
        select: { id: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });

  return <CoursesClient courses={courses} />;
}
