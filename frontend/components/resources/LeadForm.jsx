import React, { useState } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={submit} className="space-y-2">
      <input
        name="name"
        placeholder="Your name"
        className="border p-2 w-full"
        value={form.name}
        onChange={change}
      />
      <input
        name="email"
        placeholder="Your email"
        className="border p-2 w-full"
        value={form.email}
        onChange={change}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Download
      </button>
    </form>
  );
}
