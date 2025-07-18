"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const awardCategories = [
  "Most handsome (gk)",
  "Most handsome (bosso)",
  "Most beautiful (gk)",
  "Most beautiful (bosso)",
  "Most intellectual (gk)",
  "Most intellectual (bosso)",
  "Most social",
  "Entrepreneur of the year (gk)",
  "Entrepreneur of the year (bosso)",
  "Most supporting brand (uncontested)",
  "Best dressed male (gk)",
  "Best dressed male (bosso)",
  "Best dressed female (gk)",
  "Best dressed female (bosso)",
  "Most dedicated (gk)",
  "Most dedicated (bosso)",
  "Outstanding personality (gk)",
  "Outstanding personality (bosso)",
  "Cool, calm and collected (gk)",
  "Cool, calm and collected (bosso)",
  "Most influential",
  "Best clique (gk)",
  "Best clique (bosso)",
  "Mr. Culture (gk)",
  "Mr. Culture (bosso)",
  "Miss culture (gk)",
  "Miss. Culture (bosso)",
  "Academia of the year (uncontested)",
  "Most political",
  "Sports personality of the year (gk)",
  "Sports personality of the year (bosso)",
  "Mr. Ebony (gk)",
  "Mr. Ebony (bosso)",
  "Miss. Ebony (gk)",
  "Miss. Ebony (bosso)",
  "Music personality of the year",
  "Humanitarian award (uncontested)",
  "Couple of the year",
  "Icon of exquisite family (uncontested)",
  "Mr. And miss. Exquisite (uncontested)",
];

export default function addCandidate() {
  const [fullName, setFullName] = useState("");
  const [category, setCategory] = useState("");
  const [bio, setBio] = useState("");
  const [nfcsSociety, setNfcsSociety] = useState("");

  const handleContestButton = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full  max-w-md p-8 mx-5 space-y-6 bg-white rounded-lg shadow-lg border border-slate-200">
        <div className="text-center  flex flex-col text-slate-800">
          <h1 className="text-3xl font-bold pb-8 text-slate-800">
            Contest Form
          </h1>

          <div className="flex items-start flex-col">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Fullname
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-start flex-col pt-6">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select an award...</option>
              {awardCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start flex-col pt-6">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              NFCS Society(ies)
            </label>

            <input
              value={nfcsSociety}
              onChange={(e) => setNfcsSociety(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-start flex-col pt-6">
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Tell us a little about yourself
            </label>

            <input
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px- mb-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-3 px-4 rounded-md bg-slate-900 text-white font-medium transition-all"
          >
            Contest
          </button>
        </div>
      </div>
    </div>
  );
}
