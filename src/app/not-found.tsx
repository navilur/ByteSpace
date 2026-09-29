"use client";

import Button from "./components/ui/Button";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function BackButton() {
  return (
    <main
      className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-50">
        <Navbar />
      </div>

      <section className="relative z-10 flex flex-1 items-center justify-center px-6 py-20">
        <div className="w-full max-w-275 text-center">
          <h1
            className="
              bg-linear-to-b
              from-[#D4FB20] from-0%
              via-[rgba(212,251,32,0.81)] via-[50.5%]
              to-transparent
              bg-clip-text
              text-center
              font-[Poppins]
              text-[180px]
              font-semibold
              leading-[100%]
              tracking-[-0.01em]
              text-transparent
              sm:text-[260px]
              md:text-[360px]
              lg:text-[480px]
            "
          >
            404
          </h1>

          <div className="-mt-12 sm:-mt-20 md:-mt-28 lg:-mt-32">
            <h2
              className="
                relative
                z-10
                mx-auto
                max-w-233.75
                font-[Poppins]
                text-4xl
                font-semibold
                leading-[120%]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              The page you are looking for doesn’t exist
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-162.5
                font-[Satoshi]
                text-base
                leading-[160%]
                text-[#E5E6E8]
                sm:text-lg
              "
            >
              Try to use a correct URL or go back to the homepage to start
              again.
            </p>

            <div className="mt-8 flex justify-center">
              <Button onClick={() => window.history.back()}>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
