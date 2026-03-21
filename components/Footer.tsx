import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F1E8DF] text-black ">
      <div className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-4 gap-10 text-sm">
        {/* BRAND */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg">Zibah Creations</h3>

          <p className="text-gray-600 leading-relaxed">
            Zibah Creations is rooted in craftsmanship and culture. Each piece
            is thoughtfully handmade using traditional techniques, bringing
            together texture, heritage, and timeless design. Our mission is to
            create meaningful pieces that are not only beautiful, but made to
            last and be cherished.
          </p>
        </div>

        {/* LINKS */}
        <div className="space-y-3 md:pl-20">
          <h4 className="font-medium">Explore</h4>

          <div className="flex flex-col gap-2 text-gray-600">
            <Link href="/" className="hover:text-black transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-black transition">
              Products
            </Link>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div className="space-y-3">
          <h4 className="font-medium">Contact</h4>

          <div className="text-gray-600 space-y-2">
            <p>zibahcreations79@gmail.com</p>
            <p>+263 777 802 867</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="space-y-3">
          <h4 className="font-medium">Follow</h4>

          <div className="flex gap-4 text-lg text-gray-700">
            <a
              href="https://www.instagram.com/zibah_creations/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100069111076138"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaFacebookF />
            </a>
          </div>

          <p className="text-gray-500 text-xs">
            Stay connected for new pieces and updates.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Zibah Creations. All rights reserved.
      </div>
    </footer>
  );
}
