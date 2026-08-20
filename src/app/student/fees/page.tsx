export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CreditCard, CheckCircle, Clock } from "lucide-react";

export default async function StudentFeesPage() {
  const session = await getServerSession(authOptions);
  
  const student = await prisma.studentProfile.findUnique({
    where: { userId: session?.user?.id },
    include: {
      registrations: {
        include: {
          course: true,
          feeRecords: {
            orderBy: { month: "desc" }
          }
        }
      }
    }
  });

  const allFeeRecords = student?.registrations.flatMap(reg => 
    reg.feeRecords.map(fee => ({ ...fee, courseName: reg.course.name }))
  ) || [];

  allFeeRecords.sort((a, b) => b.month.localeCompare(a.month));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-custom">Fee & Payments</h2>
        <p className="text-sm text-gray-500">View your payment history and pending dues.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <h3 className="text-lg font-bold text-navy-custom flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-emerald-custom" />
            Billing History
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50/50 text-xs uppercase text-gray-400 font-semibold border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Month</th>
                <th className="px-6 py-4">Course</th>
                <th className="px-6 py-4">Amount Due</th>
                <th className="px-6 py-4">Amount Paid</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allFeeRecords.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-400">
                    No fee records found.
                  </td>
                </tr>
              )}
              {allFeeRecords.map((fee) => (
                <tr key={fee.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-navy-custom">
                    {fee.month}
                  </td>
                  <td className="px-6 py-4">
                    {fee.courseName}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {fee.amountDue.toString()}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {fee.amountPaid.toString()}
                  </td>
                  <td className="px-6 py-4">
                    {fee.status === "PAID" ? (
                      <span className="flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
                        <CheckCircle className="w-3.5 h-3.5 mr-1" />
                        Paid
                      </span>
                    ) : fee.status === "UNPAID" ? (
                      <span className="flex items-center text-xs font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md w-fit">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        Unpaid
                      </span>
                    ) : (
                      <span className="flex items-center text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md w-fit">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {fee.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
