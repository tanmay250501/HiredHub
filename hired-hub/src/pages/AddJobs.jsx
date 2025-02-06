import React, { useEffect, useState, useRef } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJobs = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programmer");
  const [salary, setSalary] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [level, setLevel] = useState("");

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const currencies = [
    { currency: "USD", symbol: "$" },
    { currency: "EUR", symbol: "€" },
    { currency: "INR", symbol: "₹" },
    { currency: "GBP", symbol: "£" },
    { currency: "AUD", symbol: "A$" },
    { currency: "CAD", symbol: "C$" },
    { currency: "JPY", symbol: "¥" },
    { currency: "CNY", symbol: "¥" }
  ];

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    // This outer container centers the card horizontally and adds responsive padding.
    <div className="flex justify-center items-center p-4 sm:p-8">
      {/* Card container; max width ensures responsiveness while mx-auto centers it */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Job Opening</h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Job Title</label>
            <input
              type="text"
              placeholder="Enter Job Title"
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Job Description</label>
            <div
              ref={editorRef}
              className="border rounded-md p-2 h-32 bg-gray-50"
            ></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Job Category</label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                {JobCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Job Location</label>
              <select
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                {JobLocations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Job Level</label>
              <select
                onChange={(e) => setLevel(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="Beginner Level">Beginner Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Senior Level">Senior Level</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Job Salary</label>
              <div className="flex items-center gap-2">
                <select
                  onChange={(e) => setCurrency(e.target.value)}
                  className="p-2 border rounded-md"
                >
                  {currencies.map((cur, index) => (
                    <option key={index} value={cur.currency}>
                      {cur.currency} {cur.symbol}
                    </option>
                  ))}
                </select>
                <input
                  onChange={(e) => setSalary(e.target.value)}
                  min={0}
                  type="number"
                  placeholder="Enter Salary"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Job Opening
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
