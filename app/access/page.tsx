"use client";
import { prisma } from "@/lib/prisma";

import React from "react";

type Nomination = {
  name: string;
  category: string;
  count: number;
};

export default async function NominationResultsPage() {
  const candidates = await prisma.nomination.findMany();
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-slate-100">
        Nomination Results
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse rounded-xl overflow-hidden shadow-sm bg-slate-900">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-slate-700">
                Candidate Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-slate-700">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-slate-700">
                Nominations
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className="hover:bg-slate-800 transition duration-200"
              >
                <td className="px-6 py-4 text-slate-200">
                  {candidate.nominee}
                </td>
                <td className="px-6 py-4 text-slate-300">
                  {candidate.category}
                </td>
                <td className="px-6 py-4 text-indigo-400 font-bold">
                  {candidate.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
