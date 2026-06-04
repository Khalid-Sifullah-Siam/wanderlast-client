import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center text-white flex flex-col justify-between items-center min-h-screen md:h-150">
      {/* Hero Content */}
      <div className="p-6 sm:p-8 md:p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer w-full sm:w-auto">
            Explore Now
          </button>
          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer w-full sm:w-auto">
            View Destination
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white/30 w-full">
        {/* Desktop / Tablet layout */}
        <div className="hidden sm:flex justify-between gap-5 w-full items-center">
          <div className="px-3 py-2">
            <h3 className="text-sm">Location</h3>
            <p className="text-xs">Address, City or Zip</p>
          </div>
          <Separator variant="tertiary" orientation="vertical" />
          <div className="py-2">
            <h3 className="text-sm">Date/Duration</h3>
            <p className="text-xs">Anytime/3 Days</p>
          </div>
          <Separator variant="tertiary" orientation="vertical" />
          <div className="py-2">
            <h3 className="text-sm">Budget</h3>
            <p className="text-xs">$0-$3000</p>
          </div>
          <Separator variant="tertiary" orientation="vertical" />
          <div className="py-2">
            <h3 className="text-sm">People</h3>
            <p className="text-xs">5-10</p>
          </div>
          <div className="bg-cyan-500 py-3 px-6 cursor-pointer self-stretch flex items-center">
            <h3 className="text-sm font-medium">Search</h3>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex sm:hidden flex-col gap-2 p-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/20 p-2 rounded">
              <h3 className="text-xs font-semibold">Location</h3>
              <p className="text-xs opacity-80">Address, City or Zip</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h3 className="text-xs font-semibold">Date/Duration</h3>
              <p className="text-xs opacity-80">Anytime/3 Days</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h3 className="text-xs font-semibold">Budget</h3>
              <p className="text-xs opacity-80">$0-$3000</p>
            </div>
            <div className="bg-white/20 p-2 rounded">
              <h3 className="text-xs font-semibold">People</h3>
              <p className="text-xs opacity-80">5-10</p>
            </div>
          </div>
          <button className="bg-cyan-500 py-3 px-4 w-full text-sm font-medium uppercase cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;