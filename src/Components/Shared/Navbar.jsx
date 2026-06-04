'use client';

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemsLeft = [
    { href: "/", children: "Home" },
    { href: "/destinations", children: "Destinations" },
    { href: "/my-booking", children: "My Booking" },
    { href: "/add-destination", children: "Add Destination" },
  ];

  const navItemsRight = [
    { href: "/login", children: "Login" },
    { href: "/signup", children: "Sign Up" },
  ];

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleDelete = async () => {
    await authClient.signOut();
    router.push("/");
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center p-6 font-bold border-b relative z-50 bg-white">

        {/* Left NavItems - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItemsLeft.map((navItemLeft, index) => (
            <Link href={navItemLeft.href} key={index}>
              {navItemLeft.children}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX size={30} />
            ) : (
              <HiMenu size={30} />
            )}
          </button>
        </div>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/Wanderlast.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {user ? (
            <div className="flex items-center gap-3">

              <Link href='/profile'>Profile</Link>

              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />

                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Button
                variant="danger"
                onClick={handleDelete}
              >
                LogOut
              </Button>

            </div>
          ) : (
            navItemsRight.map((navItemRight, index) => (
              <Link href={navItemRight.href} key={index}>
                {navItemRight.children}
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl p-6 font-semibold flex flex-col gap-5 transition-transform duration-300 z-50 ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Top */}
        <div className="flex justify-between items-center border-b pb-4">

          <Image
            src="/assets/Wanderlast.png"
            alt="Logo"
            width={120}
            height={120}
          />

          <button onClick={() => setMenuOpen(false)}>
            <HiX size={28} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-5 mt-4">

          {navItemsLeft.map((navItemLeft, index) => (
            <Link
              href={navItemLeft.href}
              key={index}
              onClick={() => setMenuOpen(false)}
            >
              {navItemLeft.children}
            </Link>
          ))}

        </div>

        {/* Bottom */}
        <div className="border-t pt-5 mt-auto flex flex-col gap-5">

          {user ? (
            <>
              <div className="flex items-center gap-3">

                <Avatar>
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />

                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <Link href='/profile'>Profile</Link>
              </div>

              <Button
                variant="danger"
                onClick={handleDelete}
              >
                LogOut
              </Button>
            </>
          ) : (
            navItemsRight.map((navItemRight, index) => (
              <Link
                href={navItemRight.href}
                key={index}
                onClick={() => setMenuOpen(false)}
              >
                {navItemRight.children}
              </Link>
            ))
          )}

        </div>
      </div>
    </>
  );
};

export default Navbar;