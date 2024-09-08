import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import getRequestConfig from "@/i18n/request"; // Adjust path to your request.ts file

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EquiTrain",
  description: "EquiTrain is a platform for reserving a horse riding lesson.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Get locale from the URL or use 'en' as default
  const locale = params.locale || "en";

  // Fetch messages using request configuration
  const { messages } = await getRequestConfig({ locale });

  // Set the direction to 'rtl' for Arabic ('ar') and 'ltr' for other locales
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning={true}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
