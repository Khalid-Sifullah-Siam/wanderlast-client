import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-8xl md:text-9xl font-extrabold text-green-500">
          404
        </h1>

        <h2 className="mt-6 text-3xl md:text-5xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Oops! The page you are looking for does not exist
          or may have been moved.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
          >
            <FaArrowLeftLong />

            Back To Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;