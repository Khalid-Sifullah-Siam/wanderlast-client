import Link from "next/link";
import DestinationCard from "./DestinationCard";
import { FaArrowRightLong } from "react-icons/fa6";


const Featured = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-destinations`);
    const destinations = await res.json();
    return (
        <div className="space-y-4 py-20 text-center">
            <h1 className="text-6xl">Featured Destinations</h1>
            <p className="text-xl text-muted">Handpicked travel experiences for the adventure seekers</p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                destinations.map((destination) => <DestinationCard key={destination._id} destination={destination} />)
            }
            </div>

            <Link href='/destinations' className="w-1/4 mx-auto bg-green-400 px-20 py-6 rounded-2xl text-red-600 text-xl font-bold flex gap-2 justify-center items-center mt-20 hover:bg-green-500 transition-all cursor-pointer6">View All Destinations
            <FaArrowRightLong />
            </Link>

        </div>
    );
};

export default Featured;