import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Amazon.com. Spend less. Smile more",
  description: "Generated by create next app",
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
