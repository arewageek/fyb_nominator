import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col p-15">
      <h1 className="text-slate-900 font-bold text-4xl mb-6">
        Nox Amoris Awards
      </h1>
      {/* <h3 className="text-slate-900 font-bold text-2xl border-b-2 mb-6">
        Admin Dashboard
      </h3> */}
      <div className="flex items-center justify-center gap-5 flex-col">
        <Link
          href="addCandidate"
          className="text-slate-200 text-2xl bg-slate-900 px-10 hover:bg-slate-800 py-5 rounded-b-2xl "
        >
          Add Candidate
        </Link>
        <Link
          href="addCategory"
          className="text-slate-200 text-2xl bg-slate-900 px-10 hover:bg-slate-800 py-5 rounded-b-2xl "
        >
          Add Category
        </Link>
        <Link
          href="viewResults"
          className="text-slate-200 text-2xl bg-slate-700 px-10 hover:bg-slate-800 py-5 rounded-b-2xl "
        >
          View Results
        </Link>
      </div>
    </div>
  );
};

export default page;
