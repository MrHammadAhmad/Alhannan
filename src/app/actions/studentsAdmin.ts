"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteStudent(id: string) {
  try {
    // Delete user will cascade to StudentProfile due to Cascade delete rules
    await prisma.user.delete({
      where: { id },
    });
    revalidatePath("/admin/students");
    return { success: true };
  } catch (error) {
    return { error: "Failed to delete student." };
  }
}
