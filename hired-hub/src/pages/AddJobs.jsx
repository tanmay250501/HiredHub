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
    { "currency": "USD", "symbol": "$" },  // United States Dollar
    { "currency": "EUR", "symbol": "€" },  // Euro
    { "currency": "INR", "symbol": "₹" },  // Indian Rupee
    { "currency": "GBP", "symbol": "£" },  // British Pound Sterling
    { "currency": "AUD", "symbol": "A$" }, // Australian Dollar
    { "currency": "CAD", "symbol": "C$" }, // Canadian Dollar
    { "currency": "JPY", "symbol": "¥" },  // Japanese Yen
    { "currency": "CNY", "symbol": "¥" }   // Chinese Yuan Renminbi
  ]
  ;

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
<div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
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
          {JobCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
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
          {JobLocations.map((location, index) => (
            <option key={index} value={location}>
              {location}
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
            {currencies.map((currencyObj, index) => (
              <option key={index} value={currencyObj.currency}>
                {currencyObj.currency} {currencyObj.symbol}
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
      className="w-full p-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
    >
      Add Job Opening
    </button>
  </form>
</div>

  );
};

export default AddJobs;
