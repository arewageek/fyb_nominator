"use client";

import React, { useState } from "react";

export default function NominationForm() {
  const [nominee, setNominee] = useState("");
  const [award, setAward] = useState("");
  const [amount, setAmount] = useState(1);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Make a Nomination
      </h2>
      <p className="text-gray-500 mb-6">
        Fill out the form below to nominate a candidate.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Nominee's Name
        </label>
        <select
          value={nominee}
          onChange={(e) => setNominee(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option>Select a nominee…</option>
          <option>John Doe</option>
          <option>Jane Smith</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Award Category
        </label>
        <select
          value={award}
          onChange={(e) => setAward(e.target.value)}
          className="w-full p-3 border-2 border-purple-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option>Select an award…</option>
          <option>Best Leader</option>
          <option>Most Supportive</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">
          Nomination Amount ($)
        </label>
        <div className="flex items-center border border-gray-300 rounded-md p-3 bg-gray-50">
          <span className="mr-2 text-gray-400">💳</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-transparent outline-none"
            min={1}
          />
        </div>
      </div>

      <button className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 px-4 rounded-md font-semibold transition">
        Add to Cart
      </button>
    </div>
  );
}
