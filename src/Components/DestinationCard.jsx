import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({destination}) => {
  const { imageUrl, price, destinationName, duration, country, _id } = destination;

  return (
    <div className="border p-6 shadow rounded-2xl flex flex-col h-full">
      
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex justify-between items-end mx-2 mt-4 flex-1">
        <div>
          <p className="flex items-center text-muted gap-1">
            <LuMapPin /> {country}
          </p>

          <h3 className="text-2xl font-medium">{destinationName}</h3>

          <p className="flex items-center text-muted gap-1">
            <FaRegCalendarAlt /> {duration}
          </p>
        </div>

        <h3>
          <span className="text-2xl font-semibold">${price}</span>/
          <span className="text-muted">person</span>
        </h3>
      </div>

      <Link href={`/destinations/${_id}`} variant="ghost" className="text-cyan-500 text-xl mt-4 flex gap-1 items-center">
        
        Book Now
        <HiArrowTopRightOnSquare />
      </Link>
    </div>
  );
};

export default DestinationCard;