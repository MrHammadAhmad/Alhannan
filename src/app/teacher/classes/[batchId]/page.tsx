export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { AttendanceClient } from "./AttendanceClient";

export default async function BatchAttendancePage(props: { params: Promise<{ batchId: string }> }) {
  const params = await props.params;
  const session = await getServerSession(authOptions);
  
  const batch = await prisma.batch.findUnique({
    where: { id: params.batchId },
    include: {
      course: true,
      teacher: true,
      registrations: {
        where: { status: "ACTIVE" },
        include: {
          student: { include: { user: true } }
        }
      },
      attendance: {
        where: {
          date: {
            gte: new Date(new Date().setHours(0,0,0,0)), // Today's records
            lt: new Date(new Date().setHours(24,0,0,0))
          }
        }
      }
    }
  });

  if (!batch || batch.teacher.userId !== session?.user?.id) {
    redirect("/teacher/classes");
  }

  return <AttendanceClient batch={batch} />;
}
