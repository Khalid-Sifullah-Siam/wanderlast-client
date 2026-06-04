"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";

const UserInformationEditModal = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    try {
      await authClient.updateUser({
        name: userData.name,
        image: userData.image,
      });

      // 🔥 force session refresh
      await authClient.getSession({ fresh: true });

      setIsOpen(false);

      // 🔥 HARD refresh (guaranteed update)
      window.location.reload();

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <Button
        onPress={() => setIsOpen(true)}
        variant="ghost"
        className="border-2 rounded-none"
      >
        <BiEdit />
        Edit Profile
      </Button>

      {/* MODAL */}
      <Modal
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
      >
        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="w-full max-w-md max-h-[90vh] overflow-hidden">

              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Heading>Edit Profile</Modal.Heading>
              </Modal.Header>

              <form onSubmit={onSubmit}>
                <Modal.Body className="p-4 overflow-y-auto max-h-[70vh]">
                  <Surface>
                    <div className="grid grid-cols-1 gap-4 p-4">

                      {/* NAME */}
                      <TextField
                        name="name"
                        defaultValue={user?.name}
                        isRequired
                      >
                        <Label>Name</Label>
                        <Input />
                        <FieldError />
                      </TextField>

                      {/* EMAIL (FIXED overflow) */}
                      <TextField
                        name="email"
                        defaultValue={user?.email}
                        isReadOnly
                      >
                        <Label>Email</Label>
                        <Input type="email" />
                        <FieldError />
                      </TextField>

                      {/* IMAGE */}
                      <TextField
                        name="image"
                        defaultValue={user?.image}
                      >
                        <Label>Image URL</Label>
                        <Input type="url" />
                        <FieldError />
                      </TextField>

                    </div>
                  </Surface>
                </Modal.Body>

                <Modal.Footer>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                  </Button>
                </Modal.Footer>

              </form>

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default UserInformationEditModal;