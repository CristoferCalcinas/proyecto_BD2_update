import { CurrentDatabase } from "../mainContent/CurrentDatabase";
import { UserSwitcher } from "../userSwitcher/UserSwitcher";
import { UserDisplayName } from "../userSwitcher/UserDisplayName";
import { MobileSidebarOpenerBtn } from "./components/MobileSidebarOpenerBtn";
import { CircleStackIcon } from "@heroicons/react/24/outline";

export const ContentArea = ({ children, setSidebarOpen }) => {
  return (
    <section id="ContentArea" className="w-full">
      <div className="sticky top-0 z-40 flex h-16 items-center justify-center border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 w-full gap-2">
        <MobileSidebarOpenerBtn setSidebarOpen={setSidebarOpen} />

        <div className="flex items-center justify-evenly lg:gap-x-10 w-full lg:justify-between">
          <div className="hidden lg:flex items-center gap-x-4 lg:gap-x-6 ">
            <button
              type="button"
              className="-m-2.5 p-0 text-gray-400 hover:text-gray-500 lg:p-2.5"
            >
              <CircleStackIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="md:flex md:justify-evenly md:w-full">
            <CurrentDatabase />
            <UserDisplayName />
          </div>
          <div>
            <UserSwitcher />
          </div>
        </div>
      </div>

      <main className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </section>
  );
};
