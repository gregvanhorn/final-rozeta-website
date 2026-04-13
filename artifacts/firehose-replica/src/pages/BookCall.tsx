import { useEffect } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/x1rvrRKGnhrlgJ8rGOpg";
const BOOKING_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

export default function BookCall() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = BOOKING_SCRIPT;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(46,100%,96%)] font-sans text-[hsl(0,0%,5%)]">
      <Navbar />
      <div className="h-16" />

      <section className="relative border-b-4 border-black bg-black">
        <div className="bg-dots-neo absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6 py-8 text-center">
          <h1 className="text-5xl font-bold tracking-tighter text-white uppercase sm:text-6xl lg:text-7xl">
            Book a{" "}
            <span className="inline-block border-4 border-white bg-[hsl(47,100%,50%)] px-3 text-black shadow-[6px_6px_0px_0px_#fff]">
              Discovery Call
            </span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8">
        <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
          <iframe
            src={BOOKING_URL}
            id="x1rvrRKGnhrlgJ8rGOpg_1773779018363"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            title="Book a Discovery Call"
            className="block min-h-[700px]"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
