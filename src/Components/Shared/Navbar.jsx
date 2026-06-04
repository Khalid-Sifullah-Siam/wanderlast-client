'use client';

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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

  const handleDelete = async () => {
    await authClient.signOut();
    router.push("/");
  };

  // Fix for Hydration Mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isLoading = isPending || !isClient;

  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center p-6 font-bold border-b relative z-50 bg-white">

        {/* Left Nav - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navItemsLeft.map((item, index) => (
            <Link href={item.href} key={index} className="hover:text-primary transition-colors">
              {item.children}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/Wanderlast.png"
            alt="Wanderlast Logo"
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* Right Side - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {isLoading ? (
            // Skeleton for Hydration Safety
            <div className="flex items-center gap-3">
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="w-8 h-8 bg-gray-200 animate-pulse rounded-full"></div>
              <div className="w-24 h-8 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="hover:text-primary transition-colors">
                Profile
              </Link>

              <Avatar className="cursor-pointer">
                <Avatar.Image
                  alt={user.name}
                  src={user.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user.name?.charAt(0)?.toUpperCase()}
                </Avatar.Fallback>
              </Avatar>

              <Button variant="danger" onClick={handleDelete}>
                Logout
              </Button>
            </div>
          ) : (
            navItemsRight.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="hover:text-primary transition-colors"
              >
                {item.children}
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl p-6 font-semibold flex flex-col gap-5 transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <Image
            src="/assets/Wanderlast.png"
            alt="Wanderlast Logo"
            width={120}
            height={120}
          />
          <button onClick={() => setMenuOpen(false)}>
            <HiX size={28} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-5 mt-4">
          {navItemsLeft.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              {item.children}
            </Link>
          ))}
        </div>

        {/* Mobile Auth Section */}
        <div className="border-t pt-5 mt-auto flex flex-col gap-5">
          {isLoading ? (
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
              <div className="h-10 bg-gray-200 animate-pulse rounded-md"></div>
            </div>
          ) : user ? (
            <>
              <div className="flex items-center gap-3">
                <Avatar>
                  <Avatar.Image
                    alt={user.name}
                    src={user.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>
                    {user.name?.charAt(0)?.toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>
                <Link href="/profile" onClick={() => setMenuOpen(false)}>
                  Profile
                </Link>
              </div>

              <Button variant="danger" onClick={handleDelete}>
                Logout
              </Button>
            </>
          ) : (
            navItemsRight.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:text-primary transition-colors"
              >
                {item.children}
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;