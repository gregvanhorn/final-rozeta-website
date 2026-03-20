import type { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-[hsl(46,100%,96%)] font-sans text-[hsl(0,0%,5%)]">
      <Navbar />
      <div className="h-16" />
      {children}
      <Footer />
    </div>
  );
}
