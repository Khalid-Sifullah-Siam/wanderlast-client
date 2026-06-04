import BookingCard from "@/Components/BookingCard";
import DeleteAlertDialog from "@/Components/DeleteAlertDialog";
import EditModal from "@/Components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  console.log(id)
  const requestHeaders = await headers();
  const tokenResponse = await auth.api.getToken({
    headers: requestHeaders,
  });
  const token = tokenResponse?.token;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
    {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : undefined,
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to load destination ${id}`);
  }

  const destination = await res.json();

  const { imageUrl, destinationName, duration, country } = destination;

  return (
    <div className="mx-auto mt-10 mb-20 max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end sm:gap-6">
        <EditModal destination={destination} />
        <DeleteAlertDialog destination={destination} />
      </div>

      <div className="space-y-6">
        <Image
          src={imageUrl} 
          alt={destinationName}
          width={1200}
          height={1200}
          className="h-auto w-full rounded-2xl object-cover"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="space-y-6">
            <p className="flex items-center gap-1 text-muted">
              <LuMapPin /> {country}
            </p>

            <h3 className="text-3xl font-medium sm:text-4xl">
              {destinationName}
            </h3>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <div className="flex items-center gap-2">
                <IoStar className="text-2xl text-green-600" />
                <p className="font-bold">
                  4.9 <span className="text-muted"> (234 reviews)</span>
                </p>
              </div>

              <div className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-xl" />
                <p>{duration}</p>
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-medium sm:text-3xl">Overview</h1>
              <p className="text-muted">
                Discover the magic of {destinationName} with pristine beaches,
                ancient temples, and vibrant culture. Experience luxury
                resorts, tropical landscapes, and unforgettable sunsets.
              </p>
            </div>

            <div className="space-y-3">
              <h1 className="text-2xl font-medium sm:text-3xl">Highlights</h1>
              <p className="text-muted">
                Discover the magic of {destinationName} with pristine beaches,
                ancient temples, and vibrant culture. Experience luxury
                resorts, tropical landscapes, and unforgettable sunsets.
              </p>

              <ul className="grid grid-cols-1 gap-2 text-muted sm:grid-cols-2">
                <li>
                  <span className="mr-3 font-extrabold text-green-600">+</span>
                  Luxury beachfront accommodation
                </li>
                <li>
                  <span className="mr-3 font-extrabold text-green-600">+</span>
                  Visit Uluwatu Temple at sunset
                </li>
                <li>
                  <span className="mr-3 font-extrabold text-green-600">+</span>
                  Traditional Balinese spa treatment
                </li>
                <li>
                  <span className="mr-3 font-extrabold text-green-600">+</span>
                  Private beach dinner experience
                </li>
                <li>
                  <span className="mr-3 font-extrabold text-green-600">+</span>
                  Sunrise trek to Mount Batur
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-6">
            <BookingCard destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
