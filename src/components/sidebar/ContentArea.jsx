import { Bars3Icon, CircleStackIcon } from "@heroicons/react/24/outline";
import { CurrentDatabase } from "../mainContent/CurrentDatabase";
import { UserSwitcher } from "../userSwitcher/UserSwitcher";
import { UserDisplayName } from "../userSwitcher/UserDisplayName";

export const ContentArea = async ({ children }) => {
  return (
    <div className="lg:pl-72">
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          // onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div className="flex items-center justify-between gap-x-4 lg:gap-x-10">
          <div className="flex items-center gap-x-4 lg:gap-x-6 ">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <CircleStackIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />
          </div>

          <CurrentDatabase />

          <div>
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
    </div>
  );
};
