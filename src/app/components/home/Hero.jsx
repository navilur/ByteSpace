import { Search } from "lucide-react";
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/Hero_Frame.png')",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className=" w-full max-w-233.75 font-[Poppins] text-4xl font-semibold leading-[120%] tracking-[-0.01em] text-center text-white sm:text-5xl md:text-6xl lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search for courses..."
              className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>
          <button
            type="button"
            className="h-14 rounded-xl bg-blue-600 px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 sm:px-10"
          >
            Search Courses
          </button>
        </div>
      </div>
    </section>
  );
}
