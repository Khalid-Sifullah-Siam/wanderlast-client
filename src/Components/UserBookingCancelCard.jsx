"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const UserBookingCancelCard = ({ booking }) => {
  const router = useRouter();
  const { destinationName, _id } = booking;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${tokenData?.token}`,
        },
      }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Booking canceled successfully!");
      router.refresh();       
      router.push(router.asPath ?? "/bookings"); 
    } else {
      toast.error("Failed to cancel booking.");
      console.error("Failed to cancel booking", data);
    }
  };

  const handleConfirm = () => {
    if (window.confirm(`Delete ${destinationName} permanently? This cannot be undone.`)) {
      handleDelete();
    }
  };

  return (
    <Button
      onClick={handleConfirm}
      variant="bordered"
      className="rounded-none border-2 border-red-500 bg-transparent text-red-500"
    >
      Cancel
    </Button>
  );
};

export default UserBookingCancelCard;