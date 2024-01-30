"use client";
import { Bars3Icon } from "@heroicons/react/24/outline";

export const MobileSidebarOpenerBtn = ({ setSidebarOpen }) => {
  return (
    <button
      type="button"
      className="m-2.5 p-2.5 text-gray-700 lg:hidden"
      onClick={() => setSidebarOpen(true)}
    >
      <Bars3Icon className="h-6 w-6" />
    </button>
  );
};
