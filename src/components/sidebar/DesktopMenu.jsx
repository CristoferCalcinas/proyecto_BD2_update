import { DatabaseTablesListener } from "./components/DatabaseTablesListener";

export const DesktopMenu = () => {
  return (
    <div>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <div>
                  <DatabaseTablesListener />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
