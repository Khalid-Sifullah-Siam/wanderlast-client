import DestinationCard from "@/Components/DestinationCard";

export const dynamic = "force-dynamic";

const ALlDestinationsPage = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch destinations: ${res.status}`);
    }
    const destinations = await res.json();
    

    return (
        <div className="space-y-4">
            <h1 className="text-6xl">Explore All Destinations</h1>
            <p className="text-xl text-muted">Find your perfect travel experience from our curated collection</p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {
                destinations.map((destination) => <DestinationCard key={destination._id} destination={destination} />)
            }
            </div>

        </div>
    );
};

export default ALlDestinationsPage;
