
import { CircleCheckFill } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import UserBookingCancelCard from "./UserBookingCancelCard";

const UserBookingCard = ({ booking }) => {
  const { imageUrl, destinationName, departureDate, _id, price } = booking;


  return (
    <div className="p-5 border rounded-2xl shadow flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">

        <Image
          src={imageUrl}
          alt={destinationName}
          width={300}
          height={300}
          className="w-full md:w-[300px] h-auto object-cover"
        />

        <div className="space-y-6 w-full">
          
          <div className="space-y-3">
            <Chip color="success" className="bg-green-100 p-2">
              <CircleCheckFill width={12} />
              <Chip.Label>Completed</Chip.Label>
            </Chip>

            <h3 className="text-2xl md:text-4xl">{destinationName}</h3>

            <div className="flex gap-2 text-muted">
              <FaRegCalendarAlt />
              <p>
                <span>Departure: </span>
                {new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }).format(new Date(departureDate))}
              </p>
            </div>

            <div className="flex gap-2 text-muted">
              <IoLocationOutline />
              <p>Booking ID: {_id}</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl text-cyan-500">
            ${price}
          </h2>

        </div>
      </div>


<UserBookingCancelCard booking={booking} />
    </div>
  );
};

export default UserBookingCard;