import MyBookingSearchSort from "@/Components/MyBookingSearchSort";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user || {};
  const { id } = user;

  if (!id) {
    return (
      <div className="space-y-3 py-20">
        <h1 className="text-6xl">My Bookings</h1>
        <p className="text-muted">Please login to view your bookings.</p>
        <Link href="/login" className="inline-block bg-cyan-500 px-5 py-2 text-white">
          Login
        </Link>
      </div>
    );
  }

  const tokenResponse = await auth.api.getToken({
    headers: await headers(),
  });
  const token = tokenResponse?.token;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
  const bookings = res.ok ? await res.json() : null;

  return (
    <div className="space-y-3 py-20">
      <h1 className="text-6xl">My Bookings</h1>
      <p className="text-muted">Manage and view your upcoming travel plans</p>

      {!bookings ? (
        <div className="py-16">
          <h2 className="text-3xl font-semibold">Bookings could not be loaded</h2>
          <p className="mt-2 text-gray-500">
            Server API is not responding right now. Please try again after the server is redeployed.
          </p>
        </div>
      ) : bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-6xl">🧳</div>

          <h2 className="text-3xl font-semibold mt-4">No Bookings Yet</h2>

          <p className="text-gray-500 mt-2">
            Start exploring amazing destinations and book your first trip.
          </p>

          <Link href="/destinations" className="mt-6 px-5 py-2 bg-cyan-500 text-white rounded-xl">
            Explore Destinations
          </Link>
        </div>
      ) : (
        <MyBookingSearchSort bookings={bookings} />
      )}
    </div>
  );
};

export default MyBookingPage;
