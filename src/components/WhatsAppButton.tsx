import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919898047700"; // WhatsApp number in international format without +
  const message = "Hello! I'm interested in your import/export services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;
