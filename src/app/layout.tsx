import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Reckon AI Dashboard",
  description: "Smart vending admin dashboard",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Navbar />
        {children}
      </body>
    </html>
  );
}