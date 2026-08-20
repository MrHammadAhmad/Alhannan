"use client";

import React from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { LayoutDashboard, Users, BookOpen, Clock, Settings, GraduationCap, DollarSign, Calendar, Video } from "lucide-react";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const sidebarItems = [
    { name: "Dashboard", path: "/teacher", icon: LayoutDashboard },
    { name: "My Classes", path: "/teacher/classes", icon: Clock },
    { name: "Profile", path: "/teacher/profile", icon: Settings },
  ];

  return (
    <DashboardLayout title="Teacher Portal" role="teacher" sidebarItems={sidebarItems}>
      {children}
    </DashboardLayout>
  );
}
