import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tap Plans | LRG Engineering",
  description:
    "City of Austin-compliant water and wastewater tap plans from LRG Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
