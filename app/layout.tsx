import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover and book cars from local car owners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
