import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact | Zibah Creations",
  description:
    "Get in touch with Zibah Creations for custom macramé bags or enquiries.",
};

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
        {/* LEFT SIDE */}
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

      {/* 🔥 FOUNDER SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* BACKGROUND TEXTURE / PARALLAX FEEL */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e')] bg-cover bg-center scale-110"></div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="/founder.webp" // 🔁 replace with founder image later
              alt="Founder"
              className="w-full h-100 object-cover rounded-2xl shadow-lg"
            />

            {/* floating accent */}
            <div className="absolute -bottom-6 -right-6 bg-[#F1E8DF] p-6 rounded-xl shadow-md hidden md:block">
              <p className="text-sm text-gray-600">
                Crafted with culture & intention
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif">Meet the Founder</h2>

            <p className="text-gray-700 leading-relaxed">
              Ruth is a creative artist who started Zibah Creations as a hobby
              in 2017. She is a mother to a beautiful girl and is studying for a
              Finance degree at a South African University. She currently
              resides in Harare, Zimbabwe. Her other artistic ventures include
              stone sculpting and story writing. She loves the beauty in nature
              and enjoys long walks and cycling.
            </p>

            <p className="text-gray-500 text-sm">
              Thank you for supporting handmade craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="bg-[#F1E8DF] py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl font-serif text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* Q1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-medium">What is the shipping policy?</h3>
              <p className="text-gray-600 mt-2 text-sm">
                We offer free shipping on all purchases done locally and meet
                the international client halfway on the shipping charges.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-medium">Do you offer custom designs?</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Absolutely. If you have a specific style, size, or colour in
                mind, feel free to reach out through the contact form and we can
                create something just for you.
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-medium">
                How long does it take to receive an order?
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                It depends on the product and the country to which it is
                required. Local clients - in Zimbabwe - will get their products
                within 7 working days. Delivery for international clients varies
                from about 3 weeks to 4 from the date of order and payment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
