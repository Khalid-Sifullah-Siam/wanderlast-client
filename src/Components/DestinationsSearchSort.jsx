"use client";

import { useMemo, useState } from "react";
import DestinationCard from "./DestinationCard";

const DestinationsSearchSort = ({ destinations }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredDestinations = useMemo(() => {
    if (!Array.isArray(destinations)) return [];

    let items = destinations;
    const query = searchTerm.trim().toLowerCase();

    if (query) {
      items = items.filter((destination) =>
        destination.destinationName?.toLowerCase().includes(query)
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
  }, [destinations, searchTerm, sortOrder]);

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <label htmlFor="destination-search" className="sr-only">
            Search destinations
          </label>
          <input
            id="destination-search"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search destinations by name..."
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-100"
          />
        </div>

        <div className="w-full max-w-xs">
          <label htmlFor="destination-sort" className="sr-only">
            Sort destinations
          </label>
          <select
            id="destination-sort"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-100"
          >
            <option value="">Sort by</option>
            <option value="az">Name A - Z</option>
            <option value="za">Name Z - A</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))
        ) : (
          <div className="col-span-full rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-600">
            No destinations match your search or sort selection.
          </div>
        )}
      </div>
    </>
  );
};

export default DestinationsSearchSort;
