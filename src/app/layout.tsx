import type { Metadata } from "next";
import { Questrial, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Navbar resolves the Neon Auth session for each request.
export const dynamic = 'force-dynamic';

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Figranium Templates — Community Automation Presets",
    template: "%s | Figranium Templates",
  },
  description: "Download presets for free, then run them on your own local, open-source Figranium instance—no vendor lock-in, no subscription required.",
};

const themeAwareFaviconScript = `
(() => {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let objectUrl;

  const updateFavicon = async () => {
    try {
      const response = await fetch('/icon.svg', { cache: 'force-cache' });
      if (!response.ok) return;

      const source = await response.text();
      const fill = media.matches ? '#FFFFFF' : '#000000';
      const themed = source.replace(/fill=\"#FFFFFF\"/g, 'fill=\"' + fill + '\"');
      const blob = new Blob([themed], { type: 'image/svg+xml' });
      const nextObjectUrl = URL.createObjectURL(blob);

      let link = document.querySelector('link[rel="icon"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }

      link.type = 'image/svg+xml';
      link.href = nextObjectUrl;

      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = nextObjectUrl;
    } catch {
      // Keep Next.js' generated favicon if the themed version cannot be built.
    }
  };

  updateFavicon();
  media.addEventListener?.('change', updateFavicon);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: themeAwareFaviconScript }} />
      </head>
      <body
        className={`${questrial.variable} ${spaceMono.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
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
