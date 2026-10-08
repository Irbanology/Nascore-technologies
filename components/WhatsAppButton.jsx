"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phone = "923012542667";
    const message = "Hi NasCore Technologies! I'm interested in your services.";

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with NasCore on WhatsApp"
            className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-lg transition-all duration-300
        hover:-translate-y-1 hover:scale-110
        hover:shadow-xl
      "
        >
            <FaWhatsapp size={32} />
        </a>
    );
}