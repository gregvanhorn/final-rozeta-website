import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// ↓↓↓ PASTE YOUR CALENDLY EMBED URL HERE (e.g. "https://calendly.com/you/discovery") ↓↓↓
const CALENDLY_URL = "";
// ↑↑↑ PASTE YOUR CALENDLY EMBED URL HERE ↑↑↑

export default function BookCall() {
  return (
    <div className="min-h-screen bg-[hsl(46,100%,96%)] font-sans text-[hsl(0,0%,5%)]">
      <Navbar />
      <div className="h-16" />

      <section className="relative border-b-4 border-black bg-black">
        <div className="bg-dots-neo absolute inset-0 opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mb-6 inline-block border-4 border-white bg-transparent px-4 py-2 text-sm font-bold tracking-widest uppercase text-white shadow-[4px_4px_0px_0px_#fff]">
            Free - 30 Minutes
          </div>
          <h1 className="text-5xl font-bold tracking-tighter text-white uppercase sm:text-6xl lg:text-7xl">
            Book a{" "}
            <span className="inline-block border-4 border-white bg-[hsl(47,100%,50%)] px-3 text-black shadow-[6px_6px_0px_0px_#fff]">
              Discovery Call
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-xl font-bold text-white/70">
            30 minutes. No fluff. We'll show you exactly what we'd build for your business.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000]">
          {CALENDLY_URL ? (
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="700"
              frameBorder="0"
              title="Book a Discovery Call"
              className="block"
            />
          ) : (
            <div className="flex min-h-[700px] flex-col items-center justify-center gap-4 bg-[hsl(46,100%,96%)] p-12 text-center">
              <div className="border-4 border-black bg-[hsl(47,100%,50%)] px-6 py-4 shadow-neo-md">
                <p className="text-lg font-bold uppercase tracking-wide">Calendly embed goes here</p>
                <p className="mt-1 text-sm font-bold opacity-60">
                  Set <code className="bg-black text-[hsl(47,100%,50%)] px-1">CALENDLY_URL</code> at the top of{" "}
                  <code className="bg-black text-[hsl(47,100%,50%)] px-1">BookCall.tsx</code>
                </p>
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-sm font-bold uppercase tracking-widest opacity-40">
          No contracts. No pressure. Just a conversation.
        </p>
      </section>

      <Footer />
    </div>
  );
}
