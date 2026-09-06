import type { Metadata } from "next";
import { Cinzel_Decorative, DM_Sans } from "next/font/google";
import Loader from "@/components/Loader";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maharaja Royal Bites | Royal Indian Cuisine in Reno, NV",
  description:
    "Maharaja Royal Bites brings 200-year-old royal Awadhi recipes to Reno, Nevada. Fine dining, heritage flavors, and a dining room fit for a king.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-royal-blue">
        <Loader />
        {children}
      </body>
    </html>
  );
}
