import React, { useState } from 'react';

export default function EmailForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Your email"
        className="border p-2 w-full"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="border p-2 w-full"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
