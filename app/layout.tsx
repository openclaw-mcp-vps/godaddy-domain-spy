import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DomainSpy – Detect Domain Sniping After Your Search",
  description: "Monitor if domains get registered right after you search for them. Catch registrar sniping in the act."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b1daf3b9-2e57-4927-b790-a0bf0a8c5af4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
