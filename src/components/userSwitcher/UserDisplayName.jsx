"use client";

import { getCookie, hasCookie } from "cookies-next";
import { UserCircleIcon } from "@heroicons/react/20/solid";

export const UserDisplayName = () => {
  const hasUserCookie = hasCookie("userDatabase");
  const actualUser = getCookie("userDatabase");
  return (
    <div className="flex items-center justify-center space-x-1">
      <UserCircleIcon className="h-6 w-6" />
      <h2>{hasUserCookie ? actualUser : "postgres"}</h2>
    </div>
  );
};
