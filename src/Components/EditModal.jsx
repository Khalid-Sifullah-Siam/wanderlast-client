"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

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
        router.refresh();
        toast.success("Destination details updated successfully!");
        setIsOpen(false);
      } else {
        toast.error("Failed to update destination.");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("An error occurred while updating destination.");
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        onPress={() => setIsOpen(true)}
        variant="ghost"
        className="rounded-none border-2 bg-transparent"
      >
        <BiEdit />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Destination</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update the destination details below and save your changes.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  id="edit-destination-form"
                  onSubmit={onSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <TextField
                    className="w-full md:col-span-2"
                    name="destinationName"
                    type="text"
                    variant="secondary"
                    isRequired
                    defaultValue={destinationName}
                  >
                    <Label>Destination Name</Label>
                    <Input placeholder="Enter destination name" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="country"
                    type="text"
                    variant="secondary"
                    isRequired
                    defaultValue={country}
                  >
                    <Label>Country</Label>
                    <Input placeholder="Enter country" />
                  </TextField>

                  <Select
                    name="category"
                    defaultSelectedKeys={[category]}
                    placeholder="Select category"
                  >
                    <Label>Category</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Beach" textValue="Beach">
                          Beach <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Mountain" textValue="Mountain">
                          Mountain <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="City" textValue="City">
                          City <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Adventure" textValue="Adventure">
                          Adventure <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Cultural" textValue="Cultural">
                          Cultural <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Luxury" textValue="Luxury">
                          Luxury <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField
                    className="w-full"
                    name="price"
                    type="number"
                    variant="secondary"
                    isRequired
                    defaultValue={price}
                  >
                    <Label>Price</Label>
                    <Input placeholder="Enter price" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="duration"
                    type="text"
                    variant="secondary"
                    isRequired
                    defaultValue={duration}
                  >
                    <Label>Duration</Label>
                    <Input placeholder="e.g. 7 days" />
                  </TextField>

                  <TextField
                    className="w-full md:col-span-2"
                    name="departureDate"
                    type="date"
                    variant="secondary"
                    isRequired
                    defaultValue={departureDate}
                  >
                    <Label>Departure Date</Label>
                    <Input />
                  </TextField>

                  <TextField
                    className="w-full md:col-span-2"
                    name="imageUrl"
                    type="text"
                    variant="secondary"
                    isRequired
                    defaultValue={imageUrl}
                  >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter image URL" />
                  </TextField>

                  <TextField
                    className="w-full md:col-span-2"
                    name="description"
                    variant="secondary"
                    isRequired
                    defaultValue={description}
                  >
                    <Label>Description</Label>
                    <TextArea placeholder="Enter description" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" form="edit-destination-form">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
