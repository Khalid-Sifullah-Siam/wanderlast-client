"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Chip } from "@heroui/react";
import { AlertDialog } from "@heroui/react";
import { useRouter } from "next/navigation";

const UserBookingCancelCard = ({ booking }) => {
  const router = useRouter();
  const { imageUrl, destinationName, departureDate, _id, price } = booking;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
      {
        method: "DELETE",
      },
      {
        headers: {
          Authorization: `Bearer ${tokenData?.token}`,
        },
      },
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      router.refresh();
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="rounded-none border-2 bg-transparent text-red-500"
      >
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete {destinationName} permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default UserBookingCancelCard;
