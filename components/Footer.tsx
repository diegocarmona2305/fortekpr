import Link from "next/link";
import Image from "next/image";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-primary/40 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-14 text-center lg:px-8">
        <div className="relative h-12 w-48">
          <Image
            src="/logo-navbar.png"
            alt="ForTek PR"
            fill
            sizes="192px"
            className="object-contain"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-white/70 sm:flex-row sm:gap-6">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
          <span className="hidden sm:inline text-white/30">·</span>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            WhatsApp
          </a>
          <span className="hidden sm:inline text-white/30">·</span>
          <a href={PHONE_LINK} className="transition-colors hover:text-primary">
            Llamar {PHONE_DISPLAY}
          </a>
        </div>

        <p className="text-xs text-white/40">
          © 2025 ForTek PR. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
