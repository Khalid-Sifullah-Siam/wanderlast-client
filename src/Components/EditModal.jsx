"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const EditModal = ({ destination }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const {
    imageUrl,
    price,
    destinationName,
    duration,
    country,
    _id,
    category,
    departureDate,
    description,
  } = destination;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const destinationData = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(destinationData),
        }
      );

      if (res.ok) {
        setIsOpen(false);
        router.refresh();
        toast.success("Destination updated successfully!");
      } else {
        toast.error("Failed to update destination.");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("An error occurred while updating destination.");
    }
  };

  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        variant="ghost"
        className="rounded-none border-2 bg-transparent"
      >
        <BiEdit />
        Edit
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Edit Destination</ModalHeader>
              <form onSubmit={onSubmit} className="flex flex-col">
                <ModalBody className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Input
                        name="destinationName"
                        label="Destination Name"
                        isRequired
                        defaultValue={destinationName}
                        variant="bordered"
                      />
                    </div>

                    <Input
                      name="country"
                      label="Country"
                      isRequired
                      defaultValue={country}
                      variant="bordered"
                    />

                    <Select
                      name="category"
                      label="Category"
                      isRequired
                      defaultSelectedKeys={[category]}
                      variant="bordered"
                    >
                      <SelectItem key="Beach">Beach</SelectItem>
                      <SelectItem key="Mountain">Mountain</SelectItem>
                      <SelectItem key="City">City</SelectItem>
                      <SelectItem key="Adventure">Adventure</SelectItem>
                      <SelectItem key="Cultural">Cultural</SelectItem>
                      <SelectItem key="Luxury">Luxury</SelectItem>
                    </Select>

                    <Input
                      name="price"
                      label="Price"
                      type="number"
                      isRequired
                      defaultValue={price}
                      variant="bordered"
                    />

                    <Input
                      name="duration"
                      label="Duration"
                      isRequired
                      defaultValue={duration}
                      variant="bordered"
                    />

                    <div className="md:col-span-2">
                      <Input
                        name="departureDate"
                        label="Departure Date"
                        type="date"
                        isRequired
                        defaultValue={departureDate}
                        variant="bordered"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Input
                        name="imageUrl"
                        label="Image URL"
                        isRequired
                        defaultValue={imageUrl}
                        variant="bordered"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Textarea
                        name="description"
                        label="Description"
                        isRequired
                        defaultValue={description}
                        variant="bordered"
                      />
                    </div>
                  </div>
                </ModalBody>

                <ModalFooter>
                  <Button variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Save Changes
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;