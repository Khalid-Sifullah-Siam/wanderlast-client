import UserInformationEditModal from "@/Components/UserInformationEditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white shadow-xl rounded-3xl p-8 border">

        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6">

          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src={user?.image || "/default-avatar.png"}
              alt={user?.name || "User"}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-800">
              {user?.name}
            </h1>

            <p className="text-gray-500 break-all">
              {user?.email}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-2xl border">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold">{user?.name}</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-2xl border">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold break-all">{user?.email}</p>
          </div>
        </div>

        {/* EDIT BUTTON */}
        <div className="mt-10 flex justify-end">
          <UserInformationEditModal user={user} />
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;