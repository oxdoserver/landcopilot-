import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { company } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat on WhatsApp at ${company.phone}`}
      className="fixed right-6 bottom-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1ebe57]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
