import I18nProvider from "@/provider/i18n/I18nProvider";
import ThemeRegistry from "@/provider/theme/ThemeRegistry";
import { MainLayout } from "@/template";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  applicationName: "Next.js Tauri PWA",
  title: "Next.js Tauri PWA",
  description: "A Next.js application with Tauri and PWA support.",
  manifest: "/logo/site.webmanifest",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Next.js Tauri PWA",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/logo/favicon.ico",
    shortcut: "/logo/favicon.ico",
    apple: "/logo/android-chrome-192x192.png",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-tap-highlight": "no",
    "msapplication-config": "/logo/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <I18nProvider>
            <MainLayout>{children}</MainLayout>
          </I18nProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
