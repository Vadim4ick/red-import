import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/shared/providers/providers";

import "@/shared/style/globals.css";

const geologica = Geologica({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geologica.className} h-full`}>
        <Providers>
          <div className="flex h-full flex-col">
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
          </div>

          {modal}
        </Providers>
      </body>
    </html>
  );
}
