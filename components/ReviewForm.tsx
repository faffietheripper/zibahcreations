"use client";

import { useState } from "react";

export default function ReviewForm({ slug }: { slug: string }) {
  const [form, setForm] = useState({
    name: "",
    message: "",
    rating: 5,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, slug }),
    });

    setLoading(false);
    setSuccess(true);

    setForm({
      name: "",
      message: "",
      rating: 5,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {/* NAME */}
      <input
        required
        className="w-full border p-3 rounded"
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      {/* MESSAGE */}
      <textarea
        required
        className="w-full border p-3 rounded"
        placeholder="Your review"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      {/* ⭐ STAR RATING */}
      <div className="flex gap-2 text-2xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            type="button"
            key={star}
            onClick={() => setForm({ ...form, rating: star })}
            className={`${
              star <= form.rating ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>

      {success && (
        <p className="text-green-600 text-sm">
          Review submitted (pending approval)
        </p>
      )}
    </form>
  );
}
