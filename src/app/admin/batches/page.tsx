export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { BatchesClient } from "./BatchesClient";

export default async function BatchesPage() {
  const [batches, courses, teachers] = await Promise.all([
    prisma.batch.findMany({
      include: {
        course: true,
        teacher: { include: { user: true } },
        _count: { select: { registrations: true } }
      }
    }),
    prisma.course.findMany({ where: { isActive: true }, select: { id: true, name: true } }),
    prisma.teacherProfile.findMany({ include: { user: { select: { name: true } } } }),
  ]);

  return <BatchesClient batches={batches} courses={courses} teachers={teachers} />;
}
