import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./fonts.css";
import "./globals.css";


// Navbar resolves the Neon Auth session for each request.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: {
    default: "Figranium Templates — Community Automation Templates",
    template: "%s | Figranium Templates",
  },
  description: "Download templates for free, then run them on your own local, open-source Figranium instance—no vendor lock-in, no subscription required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-background text-foreground min-h-screen"
      >
        <Navbar />
        <main className="app-content min-h-screen pt-16 lg:ml-[72px] lg:pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
