'use client';

import { authClient } from "@/lib/auth-client";
import {Button, DateField} from "@heroui/react";
import { useState } from "react";
import { FaRightLong } from "react-icons/fa6";
import { toast } from "react-toastify";

const BookingCard = ({destination}) => {
      
    const { imageUrl, destinationName, duration, country, price, _id } = destination;

      const [departureDate, setDepartureDate] = useState(null);

        const { data: session } = authClient.useSession();
      
        const user = session?.user || {};

        const {name, email, id, image}  = user;

        const handleBooking = async() => {
            const bookingData = {
                userId: id,
                userName: name,
                userEmail: email,
                userImage: image,
                destinationId: _id,
                destinationName,
                price,
                departureDate: new Date(departureDate),
                imageUrl,
                country,
                duration  
            }

            const { data:tokenData } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${tokenData?.token}`
                    },
                    body: JSON.stringify(bookingData)
                })

                const data = await res.json();

                if(data){
                    toast.success("Booking Successful")
                }

        }
    return (
        <div className="p-5 border shadow rounded-2xl space-y-8">

            <div>
            <p className="text-muted">Starting from</p>
            <h2 className="text-3xl text-cyan-500 sm:text-4xl">${price}</h2>
            <p className="text-muted">per person</p>
            </div>

             <DateField className="w-full sm:w-[256px]" name="date" onChange={setDepartureDate}>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
    </DateField>
    
       <Button
       onClick={handleBooking}
                className="w-full rounded-none bg-cyan-500 font-semibold text-white transition-all hover:bg-cyan-600"
              >
               Book Now
               <FaRightLong />
              </Button>

              <ul className="space-y-3">
                <li className="text-muted">
                    <span className="text-green-600 font-extrabold mr-3">+</span>
                    Free cancellation up to 7 days
                </li>
                
                <li className="text-muted">
                    <span className="text-green-600 font-extrabold mr-3">+</span>
                    Travel insurance included
                </li>

                <li className="text-muted">
                    <span className="text-green-600 font-extrabold mr-3">+</span>
                    24/7 customer support
                </li>
              </ul>


        </div>
    );
};

export default BookingCard;
