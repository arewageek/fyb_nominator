import React from "react";
import { allNominations } from "@/actions/candidate";
import { prisma } from "@/lib/prisma";

const page = async () => {
  const nominations = await prisma.nomination.findMany();
  return (
    <div className="flex items-center flex-col justify-center py-10 font-bold">
      <h1 className="text-slate-900 text-4xl pb-3">Results</h1>
      <div className="bg-slate-700 h-screen w-screen p-3 gap-5">
        {/* {nominations.map((nom) => (
        //    if (nom.nominee === "Boniface Padawasha")
        ))} */}
      </div>
    </div>
  );
};

export default page;
