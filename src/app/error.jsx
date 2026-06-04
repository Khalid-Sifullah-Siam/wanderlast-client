'use client';

import Link from "next/link";
import { FaArrowRotateLeft, FaHouse } from "react-icons/fa6";

export default function Error({
  error,
  reset,
}) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 px-6">

      <div className="max-w-2xl text-center">

        <h1 className="text-7xl md:text-8xl font-extrabold text-red-500">
          Oops!
        </h1>

        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-800">
          Something Went Wrong
        </h2>

        <p className="mt-5 text-gray-600 text-lg leading-relaxed">
          {error?.message || "An unexpected error occurred."}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            <FaArrowRotateLeft />

            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-3 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold"
          >
            <FaHouse />

            Back To Home
          </Link>

        </div>

      </div>
    </div>
  );
}