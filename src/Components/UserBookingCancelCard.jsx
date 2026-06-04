"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const UserBookingCancelCard = ({ booking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const { destinationName, _id } = booking;

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
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
        setIsOpen(false);
        router.refresh();
      } else {
        toast.error("Failed to cancel booking.");
        console.error("Failed to cancel booking", data);
      }
    } catch (error) {
      console.error("Failed to cancel booking", error);
      toast.error("Failed to cancel booking.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        onPress={() => setIsOpen(true)}
        variant="bordered"
        className="rounded-none border-2 border-red-500 bg-transparent text-red-500"
      >
        Cancel
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-[400px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-red-100 text-red-600">
                <FaRegTrashAlt className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Cancel {destinationName} booking?</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <p className="text-muted">
                This booking will be deleted from your bookings list. This action
                cannot be undone.
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="tertiary" disabled={isDeleting}>
                Close
              </Button>
              <Button
                variant="danger"
                onPress={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Canceling..." : "Cancel"}
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UserBookingCancelCard;
