import React, { useState } from 'react';

export default function QuickAssessmentForm() {
  const [form, setForm] = useState({ size: '', revenue: '' });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={submit} className="space-y-2">
      <input
        name="size"
        placeholder="Facility size"
        className="border p-2 w-full"
        value={form.size}
        onChange={change}
      />
      <input
        name="revenue"
        placeholder="Annual revenue"
        className="border p-2 w-full"
        value={form.revenue}
        onChange={change}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Estimate
      </button>
    </form>
  );
}
