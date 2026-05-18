import React from "react";

const MessageCTA = () => {
  const phone = "2348136020880";
  const message = encodeURIComponent("Hi! I need help with something.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center no-underline group"
        style={{ background: "#25D366" }}
      >
        {/* Pulse ring */}
        <span
          className="absolute w-14 h-14 rounded-full animate-ping opacity-50"
          style={{ background: "#25D366" }}
        />

        {/* WhatsApp icon */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.832L.057 23.625a.75.75 0 0 0 .918.918l5.849-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.917 0-3.7-.51-5.23-1.4l-.374-.22-3.884.971.985-3.8-.24-.386A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>

        {/* Tooltip */}
        <span className="absolute bottom-16 right-0 bg-white text-gray-700 text-xs px-3 py-2 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-gray-100">
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  );
};

export default MessageCTA;
