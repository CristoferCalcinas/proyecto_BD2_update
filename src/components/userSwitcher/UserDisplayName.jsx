"use client";

import { getCookie, hasCookie } from "cookies-next";

export const UserDisplayName = () => {
  const hasUserCookie = hasCookie("userDatabase");
  const actualUser = getCookie("userDatabase");
  return (
    <div>
      <h2>{hasUserCookie && actualUser}</h2>
    </div>
  );
};
