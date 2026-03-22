import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/237670000000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] group"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
    <span className="absolute right-16 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
      Chat with us!
    </span>
  </a>
);

export default WhatsAppButton;
