import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-[#f0f4f4] px-6">
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6">
        <Image src="" alt="Trionn Logo" className="h-8" />

        <div className="flex items-center gap-4">
          {/* Light/Dark toggle + Stats icon placeholders */}
          <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
            🌙
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
            📊
          </button>

          {/* Menu button */}
          <button className="flex items-center gap-2 text-sm font-medium">
            MENU <span className="text-xl font-bold">—</span>
          </button>
        </div>
      </header>

      {/* Hero Text */}
      <div className="mt-24 md:mt-40">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-800 leading-tight">
          ROAR IN THE <br className="hidden md:block" /> DIGITAL WILDERNESS.
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          WE ROAR WITH SUCCESS, DELIVERING THE TRIONN® THROUGH VERSATILE DESIGN,
          BRANDING AND THE LATEST TECH DEVELOPMENT TO COMPANIES.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between w-full max-w-5xl mt-16">
        <button className="border border-gray-700 text-gray-700 rounded-full px-8 py-3 hover:bg-gray-700 hover:text-white transition">
          Explore work
        </button>
        <button className="border border-gray-700 text-gray-700 rounded-full px-8 py-3 hover:bg-gray-700 hover:text-white transition">
          Get in touch
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-32 flex flex-col items-center">
        <div className="animate-bounce text-2xl text-gray-600">↓</div>
        <Image
          src=""
          alt="Work preview"
          className="mt-8 w-60 h-36 object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
