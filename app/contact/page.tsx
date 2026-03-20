import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-[#F7F3EE] text-[#1A1A1A]">
      {/* HEADER */}
      <section className="text-center py-20 px-6 space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif">Get in Touch</h1>

        <p className="text-gray-600">
          Whether you have a question, a custom request, or simply want to learn
          more about our pieces, we’d love to hear from you.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE (BRAND TOUCH) */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif">
            Thoughtfully Made, Personally Shared
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Each bag is handcrafted with care and intention. If you have any
            questions about a piece, availability, or custom options, feel free
            to reach out — we’re always happy to help.
          </p>

          <p className="text-gray-500 text-sm">
            We typically respond within 24–48 hours.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
