"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ FIX
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* NAME */}
      <input
        required
        className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-1 focus:ring-black"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      {/* EMAIL */}
      <input
        required
        type="email"
        className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-1 focus:ring-black"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      {/* MESSAGE */}
      <textarea
        required
        className="w-full border border-gray-200 p-3 rounded focus:outline-none focus:ring-1 focus:ring-black"
        placeholder="Your Message"
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded transition hover:opacity-80"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* SUCCESS */}
      {success && (
        <p className="text-green-600 text-sm text-center">
          Message sent successfully ✨
        </p>
      )}
    </form>
  );
}
