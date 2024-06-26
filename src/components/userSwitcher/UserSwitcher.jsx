import Link from "next/link";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

export const UserSwitcher = () => {
  return (
    <Link
      href={"/cambio-usuario"}
      className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
    >
      <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
      Configuraciones
    </Link>
  );
};
