'use client';

import { useRouter } from "next/navigation";
import {AlertDialog, Button} from "@heroui/react";
import { FaTrashAlt } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
const DeleteAlertDialog = ( {destination} ) => {

    const { imageUrl, price, destinationName, duration, country, _id } = destination;


    const router = useRouter();


    const handleDelete = async() => {
      const { data: tokenData } = await authClient.token();
        const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData?.token}`, 
        }
      }
    );

       const data = await res.json();

         if (data.deletedCount > 0) {
        router.push('/destinations');
  }
    }

    return (

    <AlertDialog>
      <Button variant="danger" className='rounded-none border-2 bg-transparent text-red-500'><FaTrashAlt />Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete {destinationName} permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default DeleteAlertDialog;

