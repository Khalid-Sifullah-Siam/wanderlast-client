import UserBookingCard from "@/Components/UserBookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user || {};

  const { id } = user;

    const {token} = await auth.api.getToken({
      headers: await headers()
    });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  const bookings = await res.json();

  return (
    <div className="space-y-3 py-20">
      <h1 className="text-6xl">My Bookings</h1>
      <p className="text-muted">Manage and view your upcoming travel plans</p>

      <div className="space-y-6">
        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-6xl">🧳</div>

            <h2 className="text-3xl font-semibold mt-4">No Bookings Yet</h2>

            <p className="text-gray-500 mt-2">
              Start exploring amazing destinations and book your first trip.
            </p>

            <Link
              href="/destinations"
              className="mt-6 px-5 py-2 bg-cyan-500 text-white rounded-xl"
            >
              Explore Destinations
            </Link>
          </div>
        ) 
        
        :
        
         (
          bookings.map((booking) => (
            <UserBookingCard key={booking._id} booking={booking} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyBookingPage;
