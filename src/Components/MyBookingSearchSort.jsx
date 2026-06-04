"use client";

import { useMemo, useState } from "react";
import UserBookingCard from "./UserBookingCard";

const MyBookingSearchSort = ({ bookings }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredBookings = useMemo(() => {
    if (!Array.isArray(bookings)) return [];

    let items = bookings;
    const query = searchTerm.trim().toLowerCase();

    if (query) {
      items = items.filter((booking) =>
        booking.destinationName?.toLowerCase().includes(query)
      );
    }

    if (sortOrder === "az") {
      items = [...items].sort((a, b) =>
        a.destinationName.localeCompare(b.destinationName)
      );
    } else if (sortOrder === "za") {
      items = [...items].sort((a, b) =>
        b.destinationName.localeCompare(a.destinationName)
      );
    }

    return items;
  }, [bookings, searchTerm, sortOrder]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <label htmlFor="booking-search" className="sr-only">
            Search bookings
          </label>
          <input
            id="booking-search"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search bookings by destination name..."
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <div className="w-full max-w-xs">
          <label htmlFor="booking-sort" className="sr-only">
            Sort bookings
          </label>
          <select
            id="booking-sort"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-100"
          >
            <option value="">Sort by</option>
            <option value="az">Destination A - Z</option>
            <option value="za">Destination Z - A</option>
          </select>
        </div>
      </div>

      {filteredBookings.length > 0 ? (
        filteredBookings.map((booking) => (
          <UserBookingCard key={booking._id} booking={booking} />
        ))
      ) : (
        <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-600">
          No bookings match your search or sort selection.
        </div>
      )}
    </div>
  );
};

export default MyBookingSearchSort;
