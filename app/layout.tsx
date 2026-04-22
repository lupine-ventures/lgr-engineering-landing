import type { Metadata } from "next";
import { DevAgentation } from "./dev-agentation";
import "./globals.css";

export const metadata: Metadata = {
  title: "LRG Engineering | Civil Engineering in Austin",
  description:
    "Full-service civil engineering, planning, permitting, site plan, and utility design services for private clients in the Greater Austin Area.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <DevAgentation />}
      </body>
    </html>
  );
}
